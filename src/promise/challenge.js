const fechData = require('../utils/fechData');
let API = "https://rickandmortyapi.com/api/character";

fechData(API)
    .then(data =>{
        console.log(data.info.count)
        return fechData(data.results[0].url)
    })
    .then(data => {
        console.log(data.name)
        return fechData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))