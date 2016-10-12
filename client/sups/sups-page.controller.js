
function SupsPageController(supsAPIService, $interval) {
    const ctrl = this;

    function getSups() {
        supsAPIService.sups.get({}).$promise
            .then((data) => {
                ctrl.sups = data.results;
            });
    }
    getSups();

    $interval(getSups, 5000);

    ctrl.saveSup = function saveSup(sup) {
        alert(sup.text);
    };
}

export default SupsPageController;
