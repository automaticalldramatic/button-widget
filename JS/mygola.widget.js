;(function(window, document, undefined){
	this.Widget = Mygola.extend({
		_class: 'Widget',
		_config: {
			buttonLimit: 5,
			failOverText: 'More...',
			CSS: {
				classes: {
					container: "container"
				},
				ids: {
					container: "",
					morecontainer: "moreButtons"
				}
			},

			moreClickHandler: function() {
				console.log('more clicked');
			}
		},

		/**
		 * Constructor for the Widget Class. 
		 *
		 * I use jQuery selectors here
		 * 
		 * @author Rizwan Iqbal
		 * @param  {object} el    Container element
		 * @param  {string} class Custom Class to apply(optional)
		 */
		init: function(el, classname){
			if( typeof $(el) !== 'object' ) return;
			this._config.CSS.ids.container = el;
			//define custom class
			if( typeof classname === 'string' ) {
				var i = classname.indexOf(".");
				if(i !== 0) {
					this._config.CSS.classes.container = classname;
				} else {
					return;
				}
			}
			this._config.CSS.ids.container = el;
			$('#' + el).addClass(this._config.CSS.classes.container);
			return this;
		},

		moreButton: function() {
			var more = document.createElement("button");
			more.textContent = "More....";
			if(more.addEventListener) {
				more.addEventListener( "click", this._config.moreClickHandler, false);
			} else {
				more.attachEvent('onclick', this._config.moreClickHandler);
			}
			return more;
		},

		/**
		 * Renders the buttons and binds events to them.
		 * The consumenr still has to paint them to come to the front end.
		 * @param  {[type]} element [description]
		 * @param  {[type]} buttons [description]
		 * @return {[type]}         [description]
		 */
		render: function(element, buttons) {
			if (typeof buttons !== "object") return;
			
			var html,butt,
				more = this.moreButton(),
				docfrag = document.createDocumentFragment(),
				moredocfrag = document.createDocumentFragment(),
				limit = this._config.buttonLimit;
			
			$.each( buttons, function(i, l){
				var butt = document.createElement(element);
				butt.textContent = l.text;
				if(l.handler && typeof l.handler === "object") {
					if(butt.addEventListener) {
						butt.addEventListener( l.handler.type, l.handler.method, false);
					} else {
						butt.attachEvent('on' + l.handler.type, l.handler.method);
					}
				}
				if(i < limit) {
					docfrag.appendChild(butt);
				}
				else if(i == limit) {
					docfrag.appendChild(more);
					moredocfrag.appendChild(butt);
				}
				else
					moredocfrag.appendChild(butt);
			});
			this.paint(docfrag, moredocfrag);
		},

		paint:function(fragment, morefragment) {
			$('#' + this._config.CSS.ids.container).append(fragment);
			document.getElementById(this._config.CSS.ids.morecontainer).appendChild(morefragment);
		},

		showConfig: function() {
			console.log(this._config);
		}
	});
})(this, document);
