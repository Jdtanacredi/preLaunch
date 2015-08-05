var feed = new Instafeed({
    get: 'tagged',
    tagName: 'dci',
    limit: 34,
    clientId: '9c0617e8e92248e3b7e1c147a2a48558',
    template: '<div class="grid-item insta-image"><a class="" href="{{link}}"><img width="200" height="200" class="insta-img"src="{{image}}" /></a></div>',
    after: function() {
//  Put all image elements in an array. 
			var imageArray = $('.insta-image');
// Pull out images in groups of 10 and 7 until all image elements are used.
			function createImageLi(x) {
			// $('.insta-image:lt('+x+')').wrapAll('<li class="insta-group"></li>');
				imageArray.slice(0,x).wrapAll('<li class="insta-group grid"></li>');
			}
			var listOption = 0;
			for (i = 0; i <= imageArray.length; i++) {
				console.log('option: '+ listOption + 'i: ' + i );
				if (listOption == 0) {
					createImageLi(7);
					listOption = 1;
					imageArray.splice(0,7);
					i + 7;
				} else {
					createImageLi(10);
					listOption = 0;
					imageArray.splice(0,10);
					i + 10;
				}
			}
			$('.grid').masonry({
  		// options
  		itemSelector: '.grid-item',
  		columnWidth: 200
			});
    }
});
feed.run();


// ATTEMPT TURNING ABOVE CODE INTO MODULE
/**
 * @name InstagramSlideshow
 * @jdtanacredi 
 *
 * Basic usage:
 * InstagramSlideshow();
 *
 * additionally you can use methods like InstagramSlideshow.methodName();
 */

// var InstagramSlideshow = (function () {
// 	var imageArray = $('.insta-image'),
//  			listOption = 0;

//  	var	createImageLi = function(position) {
// 	 			imageArray.slice(0,position).wrapAll('<li class="insta-group"></li>');		
// 			},
// 			removeFromArray = function(count) {
// 				imageArray.splice(0,count);
// 				i + count;
// 			};

// 	return {
// 	 	parse: function() {
// 	 		for (i = 0; i <= imageArray.length; i++) {
// 			console.log('option: '+ listOption + 'i: ' + i );
// 				if (listOption == 0) {
// 					createImageLi(7);
// 					listOption = 1;
// 					removeFromArray(7);
// 				} else {
// 					createImageLi(10);
// 					listOption = 0;
// 					removeFromArray(10);
// 				}
// 			}
// 	 	}
//  	}
// })();