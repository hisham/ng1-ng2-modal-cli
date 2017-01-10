import 'zone.js';
import 'reflect-metadata';
import * as angular from 'angular';
import { UpgradeAdapter } from '@angular/upgrade';
import {NgModule, forwardRef, NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import CORAModule from './app/app.module';
import { LoginComponent } from './app/login/login.component';
import { FavoriteComponent } from "./app/favorite/favorite.component";
import {TooltipModule} from "ng2-bootstrap";


let upgradeAdapter = new UpgradeAdapter(forwardRef(() => Ng2CoraModule));

upgradeAdapter.upgradeNg1Provider('$location');
upgradeAdapter.upgradeNg1Provider('$rootScope');

@NgModule({
  providers: [
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    FavoriteComponent,
    LoginComponent,
  ],
})

//ng2-bootstrip tooltip hack
//see https://github.com/valor-software/ng2-bootstrap/issues/1398
export class Ng2CoraModule {
  constructor(ngZone: NgZone) {
    let repeat = true;
    ngZone.onUnstable.subscribe(() => { if (!repeat) { repeat = true; } } );

    ngZone.onStable.subscribe(() => {
      if (repeat) {
        setTimeout(() => { ngZone.run(() => { repeat = false; }); }, 50);
      }
    })
  }
}

angular.module('cora.shared.favorite')
  .directive('coraFavorite', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(FavoriteComponent));

angular.module('cora.login')
  .directive('coraLogin', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(LoginComponent));

upgradeAdapter.bootstrap(document.documentElement, [CORAModule], {strictDi: true});
