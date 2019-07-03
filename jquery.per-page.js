'use strict';

(function ( $ ) {

	var methods = {
		init : function( options ) {
			var settings = $.extend( {
//				'background-image' : 'url("./flower_himawari_mark.png")',
				'background-color' : 'black',
				'color' : 'lightgray',
				'right' : '1.0rem',
				'bottom' : '1.0rem',
				'opacity' : '0.5',
				'scale' : 1.0,
				'text-scale' : 1.0
			}, options);

			// delete old layer
			var old = document.getElementById("per-page-layer");
			if( old != undefined ){
				old.parentElement.removeChild(old);
			}

			var layer = document.createElement("div");
			layer.id = "per-page-layer";
			layer.style.position = 'fixed';
			layer.style.right = settings['right'];
			layer.style.bottom = settings['bottom'];
			layer.style.height = '5rem';
			layer.style.width = '5rem';
			if( settings['background-image'] != undefined ){
				layer.style.backgroundImage = settings['background-image'];
				layer.style.backgroundSize = 'contain';
			}else{
				layer.style.backgroundColor = settings['background-color'];
			}
			layer.style.borderRadius = '2.5rem';
			layer.style.opacity = settings['opacity'];
			layer.style.transform = 'scale('+settings['scale']+')';

			// inner text
			var text = document.createElement("div");
			text.id = "per-page-layer-text";
			text.style.fontFamily = 'sans-serif';
			text.style.position = 'absolute';
			text.style.right = '0.8rem';
			text.style.bottom = '1.15rem';
			text.style.fontSize = '1.5rem';
			text.style.transform = 'scaleY(3)';
			text.style.color = settings['color'];
			text.style.transform = 'scale('+(settings['text-scale'])+','+(3*settings['text-scale'])+')';

			layer.appendChild(text);
			this[0].appendChild(layer);

			$(window).scroll(methods.update);

			methods.update( this );
			return this;
		},
		update : function( ) {
			var sposY = $(window).scrollTop();
			var dH = $(document).height();
			var wH = $(window).height();

			// get division
			var perOfHeight;
			if( dH <= wH ){
				perOfHeight = 100;
			}else{
				perOfHeight = parseInt((sposY/(dH-wH))*100);
			}

			// set text
			$("#per-page-layer-text").html(perOfHeight+"<span style='font-size:0.5rem;'>%</span>");

			return this;
		}
	};

	$.fn.perPage = function( method ) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method[' +  method + '] does not exist' );
		}
	};
}( jQuery ));
