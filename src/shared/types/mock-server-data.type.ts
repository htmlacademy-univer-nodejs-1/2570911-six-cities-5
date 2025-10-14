import { CityType } from './city.type';
import { HousingType } from './housing.type';
import { Location } from './location.type';

export type MockServerData = {
  housingTypes : HousingType[]
  cities: CityType[];
  titles: string[];
  descriptions: string[];
  previewImages: string[];
  goods: string[];
  hostNames: string[];
  hostEmails: string[];
  userTypes: ('Standart' | 'Pro')[];
  locations: Location[];
};
