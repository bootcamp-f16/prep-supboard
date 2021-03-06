import template from './sups-item.html';

import SupsItemController from './sups-item.controller';

const supsItemComponent = {
    template,
    bindings: {
        sup: '<',
        save: '&',
        delete: '&',
    },
    controller: SupsItemController,
    controllerAs: 'supsItemCtrl',
};

export default supsItemComponent;
