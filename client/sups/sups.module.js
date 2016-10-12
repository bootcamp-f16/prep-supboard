import angular from 'angular';

import supsPageComponent from './sups-page.component';
import supsListComponent from './sups-list.component';
import supsItemComponent from './sups-item.component';

const SupsModule = angular.module('app.sups', [])
    .component('supsPage', supsPageComponent)
    .component('supsList', supsListComponent)
    .component('supsItem', supsItemComponent);

export default SupsModule;
