import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { Location, MockServerData } from '../../types/index.js';
import {
  generateRandomBoolean,
  generateRandomValue,
  getRandomItem,
  getRandomItems
} from '../../helpers/common.js';
import { CONST_OFFER_DATA } from '../../../consts/consts.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles).toString();
    const description = getRandomItem<string>(this.mockData.descriptions).toString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages).toString();
    const imageCount = generateRandomValue(3, 6);
    const images = Array.from(
      { length: imageCount },
      () => getRandomItem<string>(this.mockData.previewImages)
    ).join(';');
    const isPremium = generateRandomBoolean().toString();
    const isFavorite = generateRandomBoolean().toString();
    const rating = generateRandomValue(CONST_OFFER_DATA.MIN_RATING, CONST_OFFER_DATA.MAX_RATING, 1).toString();
    const type = getRandomItem(this.mockData.housingTypes).toString();
    const bedrooms = generateRandomValue(CONST_OFFER_DATA.MIN_ROOMSCOUNT, CONST_OFFER_DATA.MAX_ROOMSCOUNT).toString();
    const maxAdults = generateRandomValue(CONST_OFFER_DATA.MIN_PEOPLECOUNT, CONST_OFFER_DATA.MAX_PEOPLECOUNT).toString();
    const price = generateRandomValue(CONST_OFFER_DATA.MIN_PRICE, CONST_OFFER_DATA.MAX_PRICE).toString();
    const goods = getRandomItems(this.mockData.goods).join(';');
    const name = getRandomItem(this.mockData.hostNames);
    const email = getRandomItem(this.mockData.hostEmails);
    const avatar = getRandomItem(this.mockData.hostAvatars);
    const isPro = getRandomItem<string>(Object.keys(Boolean));
    const commentsCount = generateRandomValue(CONST_OFFER_DATA.MIN_COMMENTS, CONST_OFFER_DATA.MAX_COMMENTS).toString();
    const location = getRandomItem<Location>(this.mockData.locations);

    const postDate = dayjs()
      .subtract(generateRandomValue(CONST_OFFER_DATA.FIRST_WEEK_DAY, CONST_OFFER_DATA.LAST_WEEK_DAY), 'day')
      .toISOString();

    return [
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
      bedrooms,
      maxAdults,
      price,
      goods,
      name,
      email,
      avatar,
      isPro,
      commentsCount,
      location
    ].join('\t');
  }
}

