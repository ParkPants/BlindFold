//Queue Giphy and retrieve random gif
var giphy_url = ("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+baby+animals");
$.get (giphy_url, function(data){
  gif_url = (['data']['image_original_url']);
});