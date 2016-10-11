import angular from 'angular';

import supsPageComponent from './sups-page.component';
import supsListComponent from './sups-list.component';

const SupsModule = angular.module('app.sups', [])
    .component('supsPage', supsPageComponent)
    .component('supsList', supsListComponent);

export default SupsModule;
