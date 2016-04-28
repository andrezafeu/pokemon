// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Setup a class for the pokemon component

PokemonApp.Pokemon = function (pokemonUri) {
	this.id = PokemonApp.Pokemon.idFromUri(pokemonUri);
};

//This is a method of the class
PokemonApp.Pokemon.prototype.render = function () {
	console.log("Rendering pokemon: #" + this.id);

	var self = this;

	//default type of ajax is get
	$.ajax({
		url: "/api/pokemon/" + this.id,
		success: function (response) {
			self.info = response;
			$(".js-height").text(self.info.height);
			$(".js-weight").text(self.info.weight);
			$(".js-hp").text(self.info.hp);
			$(".js-sp-atk").text(self.info.sp_atk);
			$(".js-sp-def").text(self.info.sp_def);
			$(".js-attack").text(self.info.attack);
			$(".js-defense").text(self.info.defense);
			$(".js-speed").text(self.info.speed);
			displayTypes(self.info);
			$(".js-pokemon-modal").modal("show");
			displayImage(self.info)
			
		},
		error: function (error) {
			console.log("Error");
			console.log(error.responseJSON);
		}
	})

};

function displayTypes (pokemon) {
	pokemon.types.forEach(function (onePokemon) {
		var types = `
		    <li>
		    	${onePokemon.name}
		    </li>`;
		    $(".js-types-list").append(types);
	});
}

function displayImage (pokemon) {
	var imagePath = "http://pokeapi.co";
	console.log(imagePath);
	$.ajax({
		url: pokemon.sprites[0].resource_uri,
		success: function (response) {
			var image = `
				<img src="${imagePath+response.image}">`;
				$(".js-profile-image").append(image);
			$(".js-pokemon-modal").modal("show");
		},
		error: function (error) {
			console.log("Error");
			console.log(error.responseJSON);
		}
	})
};

//This is a function that we will be calling
PokemonApp.Pokemon.idFromUri = function (pokemonUri) {
	var uriSegments = pokemonUri.split("/");
	var secondLast = uriSegments.length - 2;
	return uriSegments[secondLast];
};

$(document).on("ready", function() {
	$(".js-show-pokemon").on("click", function (event) {
		$('.js-types-list').empty();
		var $button = $(event.currentTarget);
		var pokemonUri = $button.data("pokemon-uri");
		// It's making a  new instance of the class we created
		var pokemon = new PokemonApp.Pokemon(pokemonUri);
		//Render the component for that particular pokemon
		pokemon.render();
	});
});