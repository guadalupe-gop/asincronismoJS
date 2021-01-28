const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
anotherFunction(API);
console.log("After");

function onError() {
  console.log("Sucedio un error al obtener los personajes");
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => obtenerPersonaje(id));
  var personajes = await Promise.all(promesas);
  console.log(personajes);

  try {
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();
