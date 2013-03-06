(function(undefined) {
	var buttons = [
		{ text:"Button 1", handler: button1Click, isDefault:true },
		{ text:"Button 2", handler: button2Click }
	];

	var widget = new Widget('#buttonContainer');

	widget.bind();
	widget._config.buttonLimit = 10;
	widget.showLimit();

	var button1Click = function(data) {
		// console.log(data);
	};

	var button2Click = function(data) {
		// console.log(data);
	};
})();