
function SupsPageController(supsAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.supToEdit = {};

    function getSups() {
        supsAPIService.sups.get({}).$promise
            .then((data) => {
                ctrl.sups = data.results;
            });
    }
    getSups();

    $interval(getSups, 5000);

    ctrl.saveSup = function saveSup(sup) {
        supsAPIService.sups.save(sup).$promise.then((data) => {
            ctrl.supToEdit = {};
            ctrl.sups = [
                data,
                ...ctrl.sups,
            ];

            flashesService.displayMessage('Sup created!', 'success');
        });
    };
}

export default SupsPageController;
