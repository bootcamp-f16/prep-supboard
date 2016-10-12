import angular from 'angular';
import { findIndex } from 'ramda';

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
        if (sup.id) {
            const index = findIndex(item => sup.id === item.id)(ctrl.sups);
            if (index !== -1) {
                angular.copy(sup, ctrl.sups[index]);
            }
            supsAPIService.sups.update(sup).$promise.then(() => {
                flashesService.displayMessage('Sup updated!', 'success');
            });
        } else {
            supsAPIService.sups.save(sup).$promise.then((data) => {
                ctrl.supToEdit = {};
                ctrl.sups = [
                    data,
                    ...ctrl.sups,
                ];

                flashesService.displayMessage('Sup created!', 'success');
            });
        }
    };

    ctrl.deleteSup = (sup) => {
        const index = findIndex(item => sup.id === item.id)(ctrl.sups);
        if (index !== -1) {
            ctrl.sups.splice(index, 1);
        }

        supsAPIService.sups.delete({ id: sup.id }).$promise.then(() => {
            flashesService.displayMessage('Sup deleted!', 'success');
        });
    };
}

export default SupsPageController;
