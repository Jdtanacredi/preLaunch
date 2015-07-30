var feed = new Instafeed({
    get: 'tagged',
    tagName: 'dci',
    clientId: '9c0617e8e92248e3b7e1c147a2a48558',
    template: '<a class="image" href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();