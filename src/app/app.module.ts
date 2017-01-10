import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import * as ngSanitize from 'angular-sanitize';

import LoginModule from './login/login.module';
import PatientsModule from './patients/patients.module';
import AppController from './app.controller';
import AppConfig from './app.config';
import FavoriteModule from "./favorite/favorite.module";

let CORAModule = angular.
  module('cora', [
    ngRoute,
    ngSanitize,
    FavoriteModule,
    LoginModule,
    PatientsModule,
  ]).
  controller('App', AppController).
  config(AppConfig).
  name;

export default CORAModule;
