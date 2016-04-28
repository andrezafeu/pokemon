//PokemonApp is a global variable
//Any global variables become a part of window
if (window.PokemonApp === undefined) {
	// If there's no variable called PokemonApp, define it as an empty object
	//Creates an object which is gonna be where we put everything that the app does
	window.PokemonApp = {};
}

PokemonApp.init = function () {
	//3rd party setup code here
	console.log("Pokemon App ONLINE!");
};

$(document).on("ready", function() {
	PokemonApp.init();
});