
function SupsPageController() {
    const ctrl = this;
    ctrl.sups = [
        {
            text: 'This is a test',
            created_date: Date.now(),
        },
        {
            text: 'Another test',
            created_date: Date.now(),
        },
    ];
}

export default SupsPageController;
