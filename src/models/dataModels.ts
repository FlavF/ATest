const datas = require("../../data/datas.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(datas);
  });
}

function findBylocalisation(localisation : string) {
  return new Promise((resolve, reject) => {
    let lat = localisation.split("&")[0];
    let lon = localisation.split("&")[1];
    
    const data = datas.find((d) => d.lat === lat && d.lon === lon); //TODO: use a function to know the closest and after show by name
    resolve(data);
  });
}

module.exports = {
  findAll,
  findBylocalisation
}