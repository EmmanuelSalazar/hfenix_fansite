HF.router = {
    _callbacks: {},

    onLoad(sectionId, callback) {
        this._callbacks[sectionId] = callback;
    },

    show(sectionId) {
        $('section').removeClass('active');
        $('.nav-link').removeClass('active');

        $('#' + sectionId).addClass('active');
        $('.nav-link[data-section="' + sectionId + '"]').addClass('active');

        if (this._callbacks[sectionId]) {
            this._callbacks[sectionId]();
        }
    },

    init() {
        const self = this;

        $(document).on('click', '.nav-link', function (e) {
            e.preventDefault();
            const section = $(this).data('section');
            if (section) self.show(section);
        });
    },
};
