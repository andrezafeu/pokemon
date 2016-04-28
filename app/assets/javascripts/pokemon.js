// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Setup a class for the pokemon component

PokemonApp.Pokemon = function (pokemonUri) {
	this.id = PokemonApp.Pokemon.idFromUri(pokemonUri);
};

PokemonApp.Pokemon.prototype.render = function () {
	console.log("Rendering pokemon: #" + this.id);
};

PokemonApp.Pokemon.idFromUri = function (pokemonUri) {
	var uriSegments = pokemonUri.split("/");
	var secondLast = uriSegments.length - 2;
	return uriSegments[secondLast];
};