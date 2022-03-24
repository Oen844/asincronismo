const fechData = require("../utils/fechData");
let API = "https://rickandmortyapi.com/api/character/";

const anotherFuntion = async (url_api) => {
  try {
    const data = await fechData(API);
    console.log(data.info.count);
    const character = await fechData(data.results[0].url);
    console.log("Nomber del personaje: ", character.name);
    const origin = await fechData(data.results[0].url);
    console.log("Nomber de la dimension: ", origin.origin.name);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
anotherFuntion();
console.log("After");
