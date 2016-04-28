// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Setup a class for the pokemon component

PokemonApp.Pokemon = function (pokemonUri) {
	this.id = PokemonApp.Pokemon.idFromUri(pokemonUri);
};

//This is a method of the class
PokemonApp.Pokemon.prototype.render = function () {
	console.log("Rendering pokemon: #" + this.id);
};

//This is a function that we will be calling
PokemonApp.Pokemon.idFromUri = function (pokemonUri) {
	var uriSegments = pokemonUri.split("/");
	var secondLast = uriSegments.length - 2;
	return uriSegments[secondLast];
};

$(document).on("ready", function() {
	$(".js-show-pokemon").on("click", function (event) {
		var $button = $(event.currentTarget);
		var pokemonUri = $button.data("pokemon-uri");
		// It's making a  new instance of the class we created
		var pokemon = new PokemonApp.Pokemon(pokemonUri);
		//Render the component for that particular pokemon
		pokemon.render();
	});
});