import angular from 'angular';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';

const SupsModule = angular.module('app.sups', [])
    .component('supsPage', supsPageComponent)
    .component('supsItem', supsItemComponent);

export default SupsModule;
