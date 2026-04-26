HF.sidebar = (function () {
    function loadStats() {
        HF.api.get(HF.ENDPOINTS.stats)
            .fail(function () {})
            .done(function (data) {
                if (data.online !== undefined) {
                    $('#user-count').text(data.online + ' usuarios conectados.');
                }
                if (data.load !== undefined) {
                    $('#server-load-label').text('Carga del servidor: ' + data.load + '%');
                    $('#server-load-bar').css('width', data.load + '%');
                }
            });
    }

    function loadTopCredits() {
        HF.api.get(HF.ENDPOINTS.topCredits)
            .fail(function () {})
            .done(function (users) {
                const html = users.map(function (u) {
                    return '<li><span>' + $('<div>').text(u.name + ' - ' + u.credits).html() + '</span></li>';
                }).join('');
                $('#top-credits-list').html(html);
            });
    }

    function init() {
        loadStats();
        loadTopCredits();
        setInterval(loadStats, 10000);
    }

    return { init };
})();
