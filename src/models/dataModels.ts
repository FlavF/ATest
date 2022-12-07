const datas = require("../../data/datas.json");
import {findTheClosestCoordinateToPointOfInterest} from "../utils/FunctionsForArray";

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(datas);
  });
}

function findByCoordinates(latitude : string, longitude : string) {
  return new Promise((resolve, reject) => {
    let place = findTheClosestCoordinateToPointOfInterest(latitude, longitude, datas);
    resolve(place);
  });
}

module.exports = {
  findAll,
  findByCoordinates
};
