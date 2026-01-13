import { CityType } from './city.type';
import { GoodsType } from './goods.type';
import { HousingType } from './housing.type';
import { User } from './user.interface';


export interface Offer {
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
    host: User;
    commentsCount: number;
    location: {
        latitude: number,
        longitude: number,
    },
}
