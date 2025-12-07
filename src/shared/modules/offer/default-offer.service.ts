import { inject, injectable } from 'inversify';
import { OfferService } from './offer-service.interface.js';
import { CityType, Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { CreateOfferDto } from './dto/create-offer.dto.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { CommentEntity } from '../comment/comment.entity.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>,
    @inject(Component.CommentModel) private readonly commentModel: types.ModelType<CommentEntity>
  ) {}

  public async find(): Promise<DocumentType<OfferEntity>[]> {
    return this.offerModel
      .find()
      .populate(['host'])
      .exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndDelete(offerId)
      .exec();
  }

  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .populate(['host'])
      .exec();
  }

  public async updateRating(offerId: string): Promise<types.DocumentType<OfferEntity> | null> {
    const comments = await this.commentModel.find({ offerId }).exec();
    const ratingValue = comments.map((comment) => comment.rating).reduce((acc, cur) => (acc += cur), 0);
    const avgRating = comments.length > 0 ? ratingValue / comments.length : 0;

    return this.offerModel
      .findByIdAndUpdate(offerId, { rate: avgRating }, { new: true })
      .exec();
  }

  public async incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, {'$inc': {
        commentCount: 1,
      }})
      .exec();
  }

  public async findPremiumOffersInCity(city: CityType): Promise<types.DocumentType<OfferEntity>[]> {
    return this.offerModel
      .find({city, isPremium: true})
      .populate(['host'])
      .exec();
  }

  public async getUserFavorites(userId: string): Promise<DocumentType<OfferEntity>[]> {
    return this.offerModel
      .find({favoritedBy: userId})
      .populate(['host'])
      .exec();
  }

  public async addFavorite(userId: string, offerId: string): Promise<types.DocumentType<OfferEntity> | null> {
    return this.offerModel.findByIdAndUpdate(
      offerId,
      { $push: { favouritedBy: userId } },
      { new: true }
    )
      .populate(['host'])
      .exec();
  }

  public async removeFavorite(userId: string, offerId: string): Promise<void> {
    await this.offerModel.findByIdAndUpdate(
      offerId,
      { $pop: { favouritedBy: userId } },
      { new: true }
    )
      .populate(['host'])
      .exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.offerModel.exists({ _id: documentId })) !== null;
  }

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${dto.title}`);

    return result;
  }

  public async findById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findById(offerId).exec();
  }
}
