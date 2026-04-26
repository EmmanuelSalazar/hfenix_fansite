HF.radio = (function () {
    let initialized = false;

    function loadInfo() {
        HF.api.get(HF.ENDPOINTS.radioInfo)
            .done(function (data) {
                if (data.title)     $('#sonic_title').text(data.title);
                if (data.listeners) $('#sonic_listeners').text(data.listeners);
            })
            .fail(function () {});
    }

    function init() {
        if (initialized) return;
        initialized = true;
        loadInfo();
        setInterval(loadInfo, 15000);
    }

    return { init };
})();
