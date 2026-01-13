import {ContainerModule, ContainerModuleLoadOptions} from 'inversify';
import {Component} from '../../types/index.js';
import {ExceptionFilter} from '../../libs/rest/index.js';
import {DefaultAuthService} from './default-auth.service.js';
import {AuthExceptionFilter} from './auth.exception-filter.js';
import {AuthService} from './auth-service.interface.js';

export const authContainer: ContainerModule = new ContainerModule(
  (options: ContainerModuleLoadOptions) => {
    options.bind<AuthService>(Component.AuthService).to(DefaultAuthService).inSingletonScope();
    options.bind<ExceptionFilter>(Component.AuthExceptionFilter).to(AuthExceptionFilter).inSingletonScope();
  });
