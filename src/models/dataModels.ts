const datas = require("../../data/datas.json");
import {distanceInKmBetweenEarthCoordinates} from "../utils/FunctionsForArray"

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(datas);
  });
}

function findBylocalisation(lat:string, lon: string) {
  return new Promise((resolve, reject) => {
    let parseLat = parseFloat(lat)
    let parseLon = parseFloat(lon)
    
    //? Calculate the distance between the point gps given by the header and the ones in the json file
    const data = datas.find((d) => distanceInKmBetweenEarthCoordinates(parseLat,parseLon,d.lat,d.lon));
    //? Find the smallest key
    let key = Object.keys(data).reduce((key, v) => (data[v] < data[key]? v : key))  
    let place = datas[key]
    console.log(place)
    resolve(place);
  });
}

module.exports = {
  findAll,
  findBylocalisation
}