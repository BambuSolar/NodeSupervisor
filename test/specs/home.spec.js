var expect = require('chai').expect;
var HomePage = require('../pageobjects/home.page');

describe('Testing HomePage', function () {

    it('Subtitle Check', function () {
        
        HomePage.open();
        
        HomePage.preloader.waitForVisible(6000, true);

        HomePage.subtitle.waitForVisible(6000);
        
        expect(HomePage.subtitle.getText()).to.contain('Ingeniería Renovable en Mendoza, Argentina');

    });

    it('Gratitude Check', function () {
        
        HomePage.open();

        HomePage.preloader.waitForVisible(6000, true);

        HomePage.gratitude.waitForExist(20 * 1000);

        HomePage.gratitude.scroll(0,0);

        browser.screenshot();

        console.log(HomePage.gratitude.getText());

        expect(HomePage.gratitude.getText()).to.contain('¡Gracias por visitarnos! Somos una empresa mendocina dedicada a las energías renovables. Desde el 2014 trabajamos cada día para que nuestra provincia sea más verde. Nuestro objetivo es ofrecer soluciones personalizadas económicas y sustentables.');

    });

});
