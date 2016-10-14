import angular from 'angular';
import 'angular-resource';
import 'angular-animate';


import FlashesModule from '../flashes/flashes.module';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';
import supsEditComponent from './sups-edit.component';

import supsAPIService from './sups-api.service';

const SupsModule = angular.module('app.sups', [
    'ngResource',
    'ngAnimate',
    FlashesModule.name,

]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .component('supsPage', supsPageComponent)
    .component('supsItem', supsItemComponent)
    .component('supsEdit', supsEditComponent)
    .factory('supsAPIService', supsAPIService);

export default SupsModule;
