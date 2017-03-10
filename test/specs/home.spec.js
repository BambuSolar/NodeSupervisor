var expect = require('chai').expect;
var FormPage = require('../pageobjects/form.page');

describe('Subtitle Check', function () {
    it('should deny access with wrong creds', function () {
        FormPage.open();

        expect(FormPage.subtitle.getText()).to.contain('Ingeniería Renovable en Mendoza, Argentina');
    });

    it('Gratitude Check', function () {
        FormPage.open();

        expect(FormPage.flash.getText()).to.contain('¡Gracias por visitarnos! Somos una empresa mendocina dedicada a las energías renovables. Desde\
              el 2014 trabajamos cada día para que nuestra provincia sea más verde. Nuestro objetivo es ofrecer\
              soluciones personalizadas económicas y sustentables.');
    });
});
