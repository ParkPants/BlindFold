(function (document){
	getBlindFold.init(funGif);
	var images = document.getElementsByTagName('img'), length = images.length

	for (var i = 0; i<length; i++) {
		var ratio = imageRatio(images[i]);
		var num = Randomize(getBlindFold[ratio]());
		var img = getBlindFold[ratio]()[num];
		images[i].src = img.imageurl
	}
})(document),

//Queue Giphy and retrieve random gif
var giphy_url = ("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+baby+animals");
$.get (giphy_url, function(data){
  var gif_url = (['data']['image_original_url']);
});

var funGif = gif_url;,

function blindfolds(ratio, imageurl){
	this.ratio = ratio;
	this.imageurl = imageurl;
},

var getBlindFold = {
	init: function(funGif){
		this.funGif = funGif;
	},

	horizontal: function(){
		return this.funGif.filter(function(funGif){
			return funGif.ratio === "horizontal";
		});
	},

	vertical: function(){
		return this.funGif.filter(function(funGif){
			return funGif.ratio === "vertical";
		});
	},

	square: function (){
		return this.funGif.filter(function(funGif){
			return funGif.ratio === "square";
		});
	}
};

function Randomize(images){
	return Math.floor(Math.random() * images.length)
},

function imageRatio(image){
	var proportion = image.height/image.width;

	if(proportion > 1){
		return "vertical";
	} else if (proportion === 1) {
		return "square";
	} else if (proportion < 1) {
		return "horizontal";
	}
};
