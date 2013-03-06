;(function(window, document, undefined){
	this.Widget = Mygola.extend({
		_class: 'Widget',
		_config: {
			buttonLimit: 5,
			failOverText: 'More...',
			show: function() {
				// console.log(this._config.buttonLimit);
			}
		},
		bind: function(e, cb){
			console.log('its here :O');
			if(!(this instanceof Mygola)) return this;
			// if(!e.length) return this;
			if(typeof cb != 'function') return this;

			var topic, _cb;

			topic = this._channel(e, !!this.id);

			// Wrap the user's callback function so we can create an 'unbind' function
			// for the user to call if they so choose
			_cb = function(evt, args){
				evt.unbind = function(){
					amplify.unsubscribe(topic, _cb);
				};

				cb(evt, args);
			};
			console.log('bound');
			return this;
		},
		init: function(el){
			if( typeof $(el) !== 'object' ) return;
			console.log('inititaited');

			// var html;

			// $.each( buttons, function( k, v) {
			// 	html += "<button>" + v.text + "</button>";
			// });
			// $(el).html(html);
		},

		showLimit: function() {
			console.log(this._config.buttonLimit);
		}
	});
})(this, document);
