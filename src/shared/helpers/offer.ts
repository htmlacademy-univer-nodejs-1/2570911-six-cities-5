import {GoodsType, CityType, HousingType, Offer} from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    city,
    previewImage,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    roomsCnt,
    peopleCnt,
    price,
    amenities,
    name,
    avatarUrl,
    email,
    isPro,
    commentsCnt,
    latitude,
    longitude
  ] = offerData.replace('\r\n', '').split('\t');

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as CityType,
    previewImage,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: parseFloat(rating),
    type: type as HousingType,
    bedrooms: parseInt(roomsCnt, 10),
    maxAdults: parseInt(peopleCnt, 10),
    price: parseInt(price, 10),
    goods: amenities.split(';') as GoodsType[],
    host: {name, avatarUrl, isPro: isPro === 'true', email},
    commentsCount: parseInt(commentsCnt, 10),
    location: {
      latitude : Number.parseFloat(latitude),
      longitude: Number.parseFloat(longitude),
    }
  };
}
