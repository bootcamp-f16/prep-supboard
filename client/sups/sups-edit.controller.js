import { merge } from 'ramda';

function SupEditController() {
    const ctrl = this;
    ctrl.editedSup = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedSup = merge({}, ctrl.sup);
    };

    ctrl.saveSup = function saveSup() {
        ctrl.save({ sup: ctrl.editedSup });
    };
}

export default SupEditController;
