import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BaseController, HttpError, HttpMethod } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { CityType, Component } from '../../types/index.js';
import { OfferService } from './offer-service.interface.js';
import { fillDTO } from '../../helpers/index.js';
import { OfferRdo } from './rdo/offer.rdo.js';
import { FullOfferRdo } from './rdo/full-offer.rdo.js';
import { CreateOfferDto } from './dto/create-offer.dto.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';

@injectable()
export class OfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Register routes for OfferController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/premium/:city', method: HttpMethod.Get, handler: this.getPremium });
    this.addRoute({ path: '/favorites', method: HttpMethod.Get, handler: this.getFavorites });
    this.addRoute({ path: '/:offerId', method: HttpMethod.Get, handler: this.show });
    this.addRoute({ path: '/:offerId', method: HttpMethod.Patch, handler: this.update });
    this.addRoute({ path: '/:offerId', method: HttpMethod.Delete, handler: this.delete });
    this.addRoute({ path: '/:offerId/favorite', method: HttpMethod.Post, handler: this.addToFavorites });
    this.addRoute({ path: '/:offerId/favorite', method: HttpMethod.Delete, handler: this.removeFromFavorites });
  }

  public async index(
    req: Request,
    res: Response
  ): Promise<void> {
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    const offers = await this.offerService.find(limit);
    this.ok(res, fillDTO(OfferRdo, offers));
  }

  public async create(
    req: Request,
    res: Response
  ): Promise<void> {
    const body = req.body as CreateOfferDto;
    const result = await this.offerService.create(body);
    this.created(res, fillDTO(FullOfferRdo, result));
  }

  public async show(
    req: Request,
    res: Response
  ): Promise<void> {
    const { offerId } = req.params;
    const offer = await this.offerService.findById(offerId);

    if (!offer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found.`,
        'OfferController'
      );
    }

    this.ok(res, fillDTO(FullOfferRdo, offer));
  }

  public async update(
    req: Request,
    res: Response
  ): Promise<void> {
    const { offerId } = req.params;
    const body = req.body as UpdateOfferDto;
    const updatedOffer = await this.offerService.updateById(offerId, body);

    if (!updatedOffer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found.`,
        'OfferController'
      );
    }

    this.ok(res, fillDTO(FullOfferRdo, updatedOffer));
  }

  public async delete(
    req: Request,
    res: Response
  ): Promise<void> {
    const { offerId } = req.params;
    const deletedOffer = await this.offerService.deleteById(offerId);

    if (!deletedOffer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found.`,
        'OfferController'
      );
    }

    this.noContent(res, {});
  }

  public async getPremium(
    req: Request,
    res: Response
  ): Promise<void> {
    const { city } = req.params;
    const offers = await this.offerService.findPremiumOffersInCity(city as CityType);
    this.ok(res, fillDTO(OfferRdo, offers));
  }

  public async getFavorites(req: Request, res: Response): Promise<void> {
    const user = req.headers.authorization!;
    const offers = await this.offerService.getUserFavorites(user);
    this.ok(res, fillDTO(OfferRdo, offers));
  }

  public async addToFavorites(
    req: Request,
    res: Response
  ): Promise<void> {
    const { offerId } = req.params;
    const user = req.headers.authorization!;
    const offer = await this.offerService.addFavorite(user, offerId);

    if (!offer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found.`,
        'OfferController'
      );
    }

    this.ok(res, fillDTO(FullOfferRdo, offer));
  }

  public async removeFromFavorites(
    req: Request,
    res: Response
  ): Promise<void> {
    const { offerId } = req.params;
    const user = req.headers.authorization!;
    const offer = await this.offerService.removeFavorite(user, offerId);

    if (!offer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found.`,
        'OfferController'
      );
    }

    this.ok(res, fillDTO(FullOfferRdo, offer));
  }
}
