import { Expose, Type } from 'class-transformer';

import { OfferLocationRdo } from './offer-location.rdo.js';
import { OfferAuthorRdo } from './offer-author.rdo.js';
import { CityType } from '../../../types/city.type.js';

export class FullOfferRdo {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: CityType;

  @Expose()
  public previewImage!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public isFavorite!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: string;

  @Expose()
  public bedrooms!: number;

  @Expose()
  public maxAdults!: number;

  @Expose()
  public price!: number;

  @Expose()
  public goods!: string[];

  @Expose({ name: 'authorId' })
  @Type(() => OfferAuthorRdo)
  public author!: OfferAuthorRdo;

  @Expose()
  public commentsCount!: number;

  @Expose()
  @Type(() => OfferLocationRdo)
  public location!: OfferLocationRdo;
}
