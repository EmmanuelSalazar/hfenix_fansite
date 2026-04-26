const HF = {
    API_BASE: 'http://localhost:8000/api',

    ENDPOINTS: {
        stats:        '/hotel/stats',
        topCredits:   '/hotel/top-credits',
        news:         '/news',
        updates:      '/updates',
        servers:      '/servers',
        allies:       '/allies',
        chatMessages: '/chat/messages',
        chatSend:     '/chat/send',
        radioInfo:    '/radio/info',
    },

    RADIO_STREAM: 'https://radios.blumhost.es:8200/stream',

    // Verifica si el backend está disponible antes de iniciar pollers
    ping(callback) {
        $.ajax({
            url: HF.API_BASE + '/hotel/stats',
            method: 'GET',
            timeout: 3000,
        })
        .done(function ()  { callback(true);  })
        .fail(function ()  { callback(false); });
    },
};
