import { merge } from 'ramda';

function SupEditController() {
    const ctrl = this;
    ctrl.editedSup = {};

    ctrl.$OnChanges = function $OnChanges() {
        ctrl.editedSup = merge({}, ctrl.sup);
    };

    ctrl.saveSup = function saveSup() {
        ctrl.save({ sup: ctrl.editedSup });
    };
}

export default SupEditController;
