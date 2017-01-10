import * as angular from 'angular';

import {Component, Inject} from '@angular/core';

@Component({
  selector: 'cora-login',
  templateUrl: 'login.template.html'
})

export class LoginComponent {

  constructor(@Inject('$location') private $location: angular.ILocationService) {

  }

  login() {
    this.$location.path('/patients');
  }

}

