'use strict'


var movie = require("./movie");
var threeFavoriteMovies = ["American Beauty", "Baby Mama", "The Royal Tenenbaums"];
threeFavoriteMovies.forEach(function(film){
  	//call on your movie modules
  	movie(film);
});