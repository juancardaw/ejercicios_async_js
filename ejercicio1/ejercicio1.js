//Aqui logicamente selecciono la URL de la API
const API_URL = "https://thronesapi.com/api/v2/Characters";

document.addEventListener("DOMContentLoaded", () => {
    const listaPersonajes = document.getElementById("listaPersonajes");
    const imagenPersonaje = document.querySelector(".imagenPersona");

    //Fetch inicial para obtener los personajes
    fetch(API_URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((personajes) => {
            //Añadimos en el HTML el option con los personajes
            const personajeInicial = document.createElement("option");
            personajeInicial.value = "";
            personajeInicial.textContent = "Selecciona un personaje";
            listaPersonajes.appendChild(personajeInicial);

            //Metemos los personajes dentro de los Select
            personajes.forEach((persona) => {
                const option = document.createElement("option");
                option.value = persona.imageUrl; // Guardar directamente la URL de la imagen
                option.textContent = persona.fullName;
                listaPersonajes.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error al obtener los personajes: ", error);
        });

    //Aqui creo un evento que muestra las imagenes de los personajes
    listaPersonajes.addEventListener("change", () => {
        const imagenUrl = listaPersonajes.value;

        if (imagenUrl) {
            imagenPersonaje.src = imagenUrl;
            imagenPersonaje.alt = `Imagen de ${listaPersonajes.options[listaPersonajes.selectedIndex].text}`;
            imagenPersonaje.style.display = "block";
        } else {
            imagenPersonaje.style.display = "none";
        }
    });
});
