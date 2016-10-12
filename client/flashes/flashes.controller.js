
function FlashesController(flashesService) {
    const ctrl = this;

    ctrl.messages = flashesService.messages;
}

export default FlashesController;
