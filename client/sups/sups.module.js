import angular from 'angular';
import 'angular-resource';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';

import supsAPIService from './sups-api.service';

const SupsModule = angular.module('app.sups', [
    'ngResource',
])
    .component('supsPage', supsPageComponent)
    .component('supsItem', supsItemComponent)
    .factory('supsAPIService', supsAPIService);

export default SupsModule;
