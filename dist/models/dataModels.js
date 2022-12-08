"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const datas = require("../../data/datas.json");
const FunctionsForArray_1 = require("../utils/FunctionsForArray");
const csvToJson_1 = require("../utils/csvToJson");
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, csvToJson_1.convertToJson)();
        return new Promise((resolve, reject) => {
            resolve(datas);
        });
    });
}
function findByCoordinates(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, csvToJson_1.convertToJson)();
        return new Promise((resolve, reject) => {
            let place = (0, FunctionsForArray_1.findTheClosestCoordinateToPointOfInterest)(latitude, longitude, datas);
            resolve(place);
        });
    });
}
module.exports = {
    findAll,
    findByCoordinates
};
