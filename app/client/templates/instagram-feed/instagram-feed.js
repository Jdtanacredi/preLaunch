var feed = new Instafeed({
    get: 'tagged',
    tagName: 'dci',
    limit: 34,
    clientId: '9c0617e8e92248e3b7e1c147a2a48558',
    template: '<a class="insta-image" href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();

// FIGURE OUT HOW TO DELAY CODE BELOW UNTIL FEED IS RUN

//  Put all image elements in an array. 
var imageArray = $('.insta-image');

// Pull out images in groups of 10 and 7 until all image elements are used.
function createImageLi(x) {
	// $('.insta-image:lt('+x+')').wrapAll('<li class="insta-group"></li>');
		imageArray.slice(0,x).wrapAll('<li class="insta-group"></li>');
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