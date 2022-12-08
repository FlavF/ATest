const datas = require("../../data/datas.json");
import {findTheClosestCoordinateToPointOfInterest} from "../utils/FunctionsForArray";
import { convertToJson } from "../utils/csvToJson";


async function findAll() {
  await  convertToJson();
  return new Promise((resolve, reject) => {
    resolve(datas);
  });
}

async function findByCoordinates(latitude : string, longitude : string) {
  await  convertToJson();
  return new Promise((resolve, reject) => {
    let place = findTheClosestCoordinateToPointOfInterest(latitude, longitude, datas);
    resolve(place);
  });
}

module.exports = {
  findAll,
  findByCoordinates
};
