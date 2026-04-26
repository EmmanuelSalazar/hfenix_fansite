HF.api = {
    get(endpoint) {
        return $.ajax({
            url: HF.API_BASE + endpoint,
            method: 'GET',
            dataType: 'json',
        });
    },

    post(endpoint, data) {
        return $.ajax({
            url: HF.API_BASE + endpoint,
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(data),
        });
    },

    put(endpoint, data) {
        return $.ajax({
            url: HF.API_BASE + endpoint,
            method: 'PUT',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(data),
        });
    },

    delete(endpoint) {
        return $.ajax({
            url: HF.API_BASE + endpoint,
            method: 'DELETE',
            dataType: 'json',
        });
    },
};
