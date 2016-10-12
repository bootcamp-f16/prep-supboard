
const BASE_URL = '/api';

function supsAPIService($resource) {
    const api = {
        sups: $resource(`${BASE_URL}/sups/`),
    };

    return api;
}

export default supsAPIService;
