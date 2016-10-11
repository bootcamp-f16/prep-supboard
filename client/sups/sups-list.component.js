import template from './sups-list.html';
import SupsListController from './sups-list.controller';

const supsListComponent = {
    template,
    bindings: {
        sups: '<',
    },
    controller: SupsListController,
    controllerAs: 'supListCtrl',
};

export default supsListComponent;
