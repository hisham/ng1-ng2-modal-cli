import * as angular from 'angular';
import PatientComponent from './patients.component';

let PatientsModule = angular.
  module('cora.patients', [
  ]).
  component('coraPatients', PatientComponent).
  name;

export default PatientsModule;
