
function flashesService($timeout) {
    const messages = [];

    function setMessage(message, type = 'info') {
        messages.push({
            message,
            type,
        });
    }

    function displayMessage(message, type = 'info') {
        setMessage(message, type);

        $timeout(() => {
            const index = messages.indexOf(message);
            messages.splice(index, 1);
        }, 3000);
    }
    return {
        messages,
        displayMessage,
    };
}

export default flashesService;
