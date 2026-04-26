HF.inicio = (function () {
    const MESSAGES = [
        '¡Bienvenido a HabboFenix!',
        '¡Qué bueno verte de nuevo!',
        'La mejor comunidad Retro',
        '¡Explora nuestra comunidad!',
    ];
    let msgIndex = 0;

    function rotateWelcome() {
        msgIndex = (msgIndex + 1) % MESSAGES.length;
        $('#dynamic-welcome').text(MESSAGES[msgIndex]);
    }

    function loadNews() {
        HF.api.get(HF.ENDPOINTS.news)
            .fail(function () {})
            .done(function (news) {
                const html = news.map(function (item) {
                    return (
                        '<div class="post-item">' +
                            '<img src="' + $('<div>').text(item.image).html() + '" alt="noticia">' +
                            '<div>' +
                                '<h3 class="text-accent">' + $('<div>').text(item.title).html() + '</h3>' +
                                '<p>' + $('<div>').text(item.body).html() + '</p>' +
                            '</div>' +
                        '</div>'
                    );
                }).join('');
                $('#news-list').html(html);
            });
    }

    // Solo el banner, sin llamadas a la API
    function initStatic() {
        setInterval(rotateWelcome, 4000);
    }

    return { initStatic, loadNews };
})();
