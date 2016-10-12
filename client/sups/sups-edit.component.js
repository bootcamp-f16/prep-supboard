import template from './sups-edit.html';

import SupEditController from './sups-edit.controller';

const supsEditComponent = {
    template,
    bindings: {
        sup: '<',
        save: '&',
    },
    controller: SupEditController,
    controllerAs: 'supEditCtrl',
};

export default supsEditComponent;
