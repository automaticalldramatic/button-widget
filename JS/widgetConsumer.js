(function(undefined) {

	var button1Click = function(data) {
		console.log('data1');
	};

	var button2Hover = function(data) {
		console.log('data2');
	};

	var button7Hover = function(data) {
		console.log('You Reached 7!');
	};

	var button8Hover = function(data) {
		console.log('This is 8!');
	};

	var widget = new Widget('buttonContainer');

	/*
		You can dynamically modify the style too
	 */
	
	// widget._config.CSS.container = {
	// 	width: '300px',
	// 	background: '#fff000'
	// };

	// widget._config.CSS.morecontainer = {
	// 	width: '100px',
	// 	background: '#fff000'
	// }

	var buttons = [
		{ text:"Button1", handler: { type:"click", method: button1Click }, isDefault:true },
		{ text:"Button2", handler: { type:"mouseover", method: button2Hover }},
		{ text:"Button3"},
		{ text:"Button4"},
		{ text:"Button5"},
		{ text:"Button6"},
		{ text:"Button7", handler: { type:"mouseover", method: button7Hover }},
		{ text:"Button8", handler: { type:"mouseover", method: button8Hover }}
	];

	/*
		Call render last
	 */
	
	widget.render("button", buttons);
	
})();