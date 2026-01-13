export const HOUSING_TYPES = [
  'apartment',
  'house',
  'room',
  'hotel',
] as const;

export const GOODS = [
  'Breakfast',
  'Air conditioning',
  'Laptop friendly workspace',
  'Baby seat',
  'Washer',
  'Towels',
  'Fridge',
] as const;

export const enum CONST_OFFER_DATA {
  MIN_RATING = 1,
  MAX_RATING = 5,
  MIN_ROOMSCOUNT = 1,
  MAX_ROOMSCOUNT = 8,
  MIN_PEOPLECOUNT = 1,
  MAX_PEOPLECOUNT = 10,
  MIN_PRICE = 1,
  MAX_PRICE = 1000000,
  MIN_COMMENTS = 0,
  MAX_COMMENTS = 999,
  FIRST_WEEK_DAY = 1,
  LAST_WEEK_DAY = 7
}

export const enum CITIES {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const CITY_VALUES = [
  CITIES.Paris,
  CITIES.Cologne,
  CITIES.Brussels,
  CITIES.Amsterdam,
  CITIES.Hamburg,
  CITIES.Dusseldorf
] as const;
