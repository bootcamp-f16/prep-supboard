
const BASE_URL = '/api';

function supsAPIService($resource) {
    const api = {
        sups: $resource(`${BASE_URL}/sups/:id/`,
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            },
        ),
    };

    return api;
}

export default supsAPIService;
