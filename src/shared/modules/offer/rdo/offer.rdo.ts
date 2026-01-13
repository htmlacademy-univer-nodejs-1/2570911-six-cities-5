import { Expose } from 'class-transformer';
import { CityType } from '../../../types';

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
  public city!: CityType;

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
