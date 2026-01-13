import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Middleware } from './middleware.interface.js';
import { HttpError } from '../errors/http-error.js';
import { CITIES, CITY_VALUES } from '../../../../consts/consts.js';

export class ValidateCityMiddleware implements Middleware {
  constructor(private param: string) {}

  public execute({ params }: Request, _res: Response, next: NextFunction): void {
    const city = params[this.param];

    if (CITY_VALUES.includes(city as CITIES)) {
      return next();
    }

    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      `${city} is invalid City`,
      'ValidateCityMiddleware'
    );
  }
}
