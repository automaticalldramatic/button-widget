;(function(window, document, undefined){
	
	this.Widget = Mygola.extend({
		_class: 'Widget',
		/**
		 * Configuration for the widget
		 * @type {Object}
		 */
		_config: {
			buttonLimit: 5,
			moreText: 'More...',
			CSS: {
				classes: {
					container: "container"
				},
				ids: {
					container: "",
					morecontainer: "plus"
				},
				container: {
					width: 400,
					margin: '20% auto',
					background: '#666',
					padding: '20px'
				},
				morecontainer: {
					display: 'none',
					width: 100,
					background: '#666',
					padding: '20px',
					position: 'absolute'
				}
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
					this._config.CSS.classes.container = classname.substr(1);
				}
			}
			this._config.CSS.ids.container = el;
			var ml = this._config.CSS.ids.morecontainer;

			$('#' + el).addClass(this._config.CSS.classes.container);

			return this;
		},

		/**
		 * Renders the buttons and binds events to them.
		 *
		 * @author Rizwan Iqbal
		 * @param  {string} element Type of HTML element to paint
		 * @param  {array} buttons  An array of configuration options for the buttons
		 */
		render: function(element, buttons) {
			if (typeof buttons !== "object") return;
			
			var html,butt,
				more = this.helpers.moreButton(),
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

		/**
		 * Paints the UI to the front end
		 * @param  {object} fragment     Document Fragment
		 * @param  {object} morefragment Document Fragment for more
		 */
		paint:function(fragment, morefragment) {
			var cn = this._config.CSS.ids.container,
				mc = this._config.CSS.ids.morecontainer;

			$.each(this._config.CSS.container, function(k , v) {
				$('#' + cn).css(k, v);
			});

			$.each(this._config.CSS.morecontainer, function(k , v) {
				$('#' + mc).css(k, v);
			});

			var leftoffset = $('#' + cn).offset().left + $('#' + cn).width() - $('#' + mc).width();
			// var topoffset = document.height - $('#' + cn).offset().top - ($('#' + mc).height());
			var topoffset = $('#' + cn).offset().top + $('#' + cn).height();
			$('#' + mc).offset({ top: topoffset, left: leftoffset});

			$('#' + this._config.CSS.ids.container).append(fragment);
			document.getElementById(this._config.CSS.ids.morecontainer).appendChild(morefragment);
		},

		helpers: {

			moreButton: function() {
				var more = document.createElement("button");
				more.textContent = Widget.prototype._config.moreText;
				if(more.addEventListener) {
					more.addEventListener( "click", Widget.prototype.helpers.moreClickHandler, false);
				} else {
					more.attachEvent('onclick', Widget.prototype.helpers.moreClickHandler);
				}
				
				return more;
			},

			moreClickHandler: function() {
				var cont = Widget.prototype._config.CSS.ids.morecontainer;
				($('#'+cont).is(":visible")) ? $('#'+cont).hide() : $('#'+cont).show();
			},

			showConfig: function() {
				console.log(this._config);
			}
		}
	});
})(this, document);
