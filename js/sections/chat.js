HF.chat = (function () {
    let initialized = false;

    function loadMessages() {
        HF.api.get(HF.ENDPOINTS.chatMessages)
            .done(function (messages) {
                const $box = $('#chat-box');
                $box.empty();
                messages.forEach(function (m) {
                    appendTo($box, m.user, m.text);
                });
                scrollToBottom($box);
            })
            .fail(function () {});
    }

    function sendMessage() {
        const user = $('#chat-user').val().trim() || 'Invitado';
        const text = $('#chat-msg').val().trim();
        if (!text) return;

        const $box = $('#chat-box');
        appendTo($box, user, text);
        scrollToBottom($box);
        $('#chat-msg').val('');

        HF.api.post(HF.ENDPOINTS.chatSend, { user, text }).fail(function () {});
    }

    function appendTo($box, user, text) {
        const $msg  = $('<div>').css('margin-bottom', '5px');
        const $name = $('<b>').text(user + ': ');
        const $text = $('<span>').text(text);
        $msg.append($name, $text);
        $box.append($msg);
    }

    function scrollToBottom($box) {
        $box.scrollTop($box[0].scrollHeight);
    }

    function init() {
        if (initialized) return;
        initialized = true;

        $(document).on('click', '#chat-send-btn', sendMessage);
        $(document).on('keydown', '#chat-msg', function (e) {
            if (e.key === 'Enter') sendMessage();
        });

        loadMessages();
        setInterval(loadMessages, 5000);
    }

    return { init };
})();
