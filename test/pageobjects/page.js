function Page () {
}

Page.prototype.open = function (path) {

	var url = {
		"beta": 'http://45.55.23.251/',
		'prod': 'http://www.bambusolar.com/'
	}

	var environment = 'beta';

    browser.url(url[environment] + path)
    	.windowHandleMaximize();
}

module.exports = new Page()
