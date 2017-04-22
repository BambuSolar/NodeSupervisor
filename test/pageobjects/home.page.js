var page = require('./page')

var homePage = Object.create(page, {
    /**
     * define elements
     */
    preloader: { get: function () { return browser.element('.preloader') }},
    gratitude: { get: function () { return browser.element('#who_we_are > div > div > div > h3'); } },
    subtitle:  { get: function () { return browser.element('#home > div > div > h4'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/#home');
    } },

    submit: { value: function() {
        //this.form.submitForm();
    } }
});

module.exports = homePage
