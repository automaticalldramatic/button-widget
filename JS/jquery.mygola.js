(function(window, document, undefined) {
	"use strict"

	if(jQuery === undefined)
		return;

	var $ = window.jQuery;

	var WIDGET = function(name, url, options) {

		var config = {

			buttonLimit: 5,
			show: function() {
				console.log('see this');
			}
		};

		var ui = {
			init: function() {
				console.log('this is called');
				config.show();
			}
		};

		return {
			'ui' : ui
		};
	}();
	
	//Since we are using jQuery, I extended jQuery for the My Gola Widget.
	$.extend(true, $, {
		MYGOLA: {
			widget: function(){
				return WIDGET;
			}
		}
	});

})(this, document);

