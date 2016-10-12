
function SupsItemController() {
    const ctrl = this;

    ctrl.editMode = false;
    ctrl.showControls = false;

    ctrl.setShowControls = (showControls) => {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = (editMode) => {
        ctrl.editMode = editMode;
    };
}

export default SupsItemController;
