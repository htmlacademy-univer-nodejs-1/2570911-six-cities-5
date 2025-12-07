import { Expose, Type } from 'class-transformer';
import { OfferCityRdo } from './offer-city.rdo';

export class OfferRdo {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public type!: string;

  @Expose()
  public price!: number;

  @Expose()
  @Type(() => OfferCityRdo)
  public city!: OfferCityRdo;

  @Expose()
  public previewImage!: string;

  @Expose()
  public isFavorite!: boolean;

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public commentsCount!: number;

  @Expose()
  public postDate!: Date;
}
