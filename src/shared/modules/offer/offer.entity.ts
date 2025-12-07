import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import {GoodsType, CityType, HousingType} from '../../types/index.js';
import {UserEntity} from '../user/index.js';

export interface OfferEntity extends defaultClasses.Base {
}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({required: true})
  public postDate: Date;

  @prop({required: true})
  public city: CityType;

  @prop({required: true})
  public previewImage: string;

  @prop({required: true})
  public images: string[];

  @prop({default: false})
  public isPremium: boolean;

  @prop({
    ref: UserEntity,
    required: true,
    default: []
  })
  public isFavoriteBy!: Ref<UserEntity>[];

  @prop({default: 0})
  public rating: number;

  @prop({required: true})
  public bedrooms: number;

  @prop({required: true})
  public maxAdults: number;

  @prop({default: []})
  public goods: GoodsType[];

  @prop({required: true})
  public location: {
      latitude: number,
      longitude: number,
  };

  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public price!: number;

  @prop({required: true})
  public type!: HousingType;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public host!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
