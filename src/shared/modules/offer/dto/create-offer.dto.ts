import {GoodsType, CityType, HousingType, User} from '../../../types';

export class CreateOfferDto {
  title: string;
  description: string;
  postDate: Date;
  city: CityType;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavoriteBy: User[];
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
