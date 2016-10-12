import angular from 'angular';

import flashesComponent from './flashes.component';
import flashesService from './flashes.service';

const FlashesModule = angular.module('flashes', [])
    .component('flashes', flashesComponent)
    .factory('flashesService', flashesService);

export default FlashesModule;
