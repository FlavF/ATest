"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToJson = void 0;
const csvtojson_1 = __importDefault(require("csvtojson"));
const FunctionsJson_1 = require("./utils/FunctionsJson");
const FunctionsForArray_1 = require("./utils/FunctionsForArray");
//?Datas
const csvFilePath = "data/events.csv";
const jsonPointsOfInterest = "data/points-of-interest.json";
const jsonDatas = "data/datas.json";
//? Read JSon file
const pointsOfInterest = (0, FunctionsJson_1.readJson)(jsonPointsOfInterest);
// From CSV to JSON
function convertToJson() {
    (0, csvtojson_1.default)().fromFile(csvFilePath).then((datas) => {
        //? Create the new patern of the JSON from csv datas
        const newJson = datas.map(data => ({
            lat: (0, FunctionsForArray_1.findTheClosestCoordinateToPointOfInterest)(data.lat, data.lon, pointsOfInterest).lat,
            lon: (0, FunctionsForArray_1.findTheClosestCoordinateToPointOfInterest)(data.lat, data.lon, pointsOfInterest).lon,
            name: (0, FunctionsForArray_1.findTheClosestCoordinateToPointOfInterest)(data.lat, data.lon, pointsOfInterest).name,
            impressions: (data.event_type === "imp") ? 1 : 0,
            clicks: (data.event_type === "click") ? 1 : 0
        }));
        //? Reduce the Array with the points of interest
        (0, FunctionsForArray_1.reduceArray)(newJson);
        //? Write the datas on the json file
        (0, FunctionsJson_1.writeToJson)(jsonDatas, (0, FunctionsForArray_1.reduceArray)(newJson));
    });
}
exports.convertToJson = convertToJson;
convertToJson();
