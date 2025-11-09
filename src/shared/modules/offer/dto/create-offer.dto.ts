import {GoodsType, CityType, HousingType} from '../../../types';

export class CreateOfferDto {
  title: string;
  description: string;
  postDate: Date;
  city: CityType;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HousingType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: GoodsType[];
  host: string;
  commentsCount: number;
  location: {
      latitude: number,
      longitude: number,
  };
}
