var page = require('./')

var homePage = Object.create(page, {
    /**
     * define elements
     */
    gratitude:{ get: function () { return browser.element('#login'); } },
    subtitle: { get: function () { return browser.element('#home > div > div > h4'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '');
    } },

    submit: { value: function() {
        //this.form.submitForm();
    } }
});

module.exports = formPage
