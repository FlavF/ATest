"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datas = require("../../data/datas.json");
const FunctionsForArray_1 = require("../utils/FunctionsForArray");
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(datas);
    });
}
function findByCoordinates(latitude, longitude) {
    return new Promise((resolve, reject) => {
        let place = (0, FunctionsForArray_1.findTheClosestCoordinateToPointOfInterest)(latitude, longitude, datas);
        resolve(place);
    });
}
module.exports = {
    findAll,
    findByCoordinates
};
