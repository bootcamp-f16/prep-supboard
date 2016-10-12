import { merge } from 'ramda';

function SupsItemController() {
    const ctrl = this;

    ctrl.editMode = false;
    ctrl.showControls = false;
    ctrl.supToEdit = {};

    ctrl.setShowControls = (showControls) => {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = (editMode) => {
        ctrl.editMode = editMode;
        ctrl.supToEdit = merge({}, ctrl.sup);
    };

    ctrl.editSup = (sup) => {
        ctrl.save({ sup });
        ctrl.editMode = false;
    };
}

export default SupsItemController;
