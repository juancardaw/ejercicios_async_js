//Genero una funcion que crea un numero aleatorio desde el 1 hasta el 151. Es toda la cantidad de pokemons que hay
function pokemonRandom () {
return Math.floor(Math.random() * 151) + 1;
};

//En este caso creo las constantes para obtener el ID y URL de Pokemon. Despues selecciono el IMG del HTML
const IDPokemon = pokemonRandom();
const url = `https://pokeapi.co/api/v2/pokemon/${IDPokemon}`;
const imagenRandom = document.querySelector(".imagen_random");


fetch(url)
.then((res) => res.json())
.then((data) => {
        console.log("Datos del Pokémon", data); 
        const imageUrl = data.sprites.other["official-artwork"].front_default;
        console.log("URL de la imagen del Pokémon:", imageUrl);
        //Creamos el condicional, ya que si existe la imagen nos sale por pantalla, pero si no existe, aparece un mensaje
        if (imageUrl){
            imagenRandom.src = imageUrl;
            imagenRandom.alt= data.name;
        } else {
            imagenRandom.alt = "Imagen no disponible";
            imagenRandom.style.display = "none";
        };
})
//y en este caso creo un mensaje de error si el pokemon no se ejecuta.
.catch((error) => {
    console.error("Error al intentar recuperar el Pokémon: ", error);
    imagenRandom.alt = "Error al cargar la imagen";
});




