import { StatusCodes } from 'http-status-codes';
import { BaseUserException } from './base-user.exception.js';

export class LoginErrorException extends BaseUserException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, 'Incorrect username or password');
  }
}
