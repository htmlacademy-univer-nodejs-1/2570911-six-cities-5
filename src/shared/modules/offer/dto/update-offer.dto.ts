import {GoodsType, User} from '../../../types';

export class UpdateOfferDto {
  title: string;
  description: string;
  previewImage: string;
  images: string[];
  isPremium?: boolean;
  isFavoriteBy?: User[];
  rating: number;
  price: number;
  goods: GoodsType[];
  commentsCount: number;
}
