$(function () {
    HF.router.init();
    HF.router.onLoad('radio', HF.radio.init.bind(HF.radio));
    HF.router.onLoad('chat',  HF.chat.init.bind(HF.chat));

    HF.inicio.initStatic();   // banner rotativo, sin API
    HF.router.show('inicio');

    HF.ping(function (online) {
        if (!online) return;
        HF.inicio.loadNews();
        HF.sidebar.init();
    });
});
