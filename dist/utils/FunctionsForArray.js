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
exports.reduceArray = exports.findTheClosestCoordinateToPointOfInterest = exports.distanceInKmBetweenEarthCoordinates = void 0;
//? Distance between two coordinates
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
}
exports.distanceInKmBetweenEarthCoordinates = distanceInKmBetweenEarthCoordinates;
function findTheClosestCoordinateToPointOfInterest(latitude, longitude, jsonFile) {
    return __awaiter(this, void 0, void 0, function* () {
        let parseLat = parseFloat(latitude);
        let parseLon = parseFloat(longitude);
        let newArray = [];
        //? if the coordinates matches
        for (let jFile of jsonFile) {
            if (parseLat === jFile.lat && parseLon === jFile.lon) {
                return jFile;
            }
        }
        //? if not the same coordinates
        for (let jFile of jsonFile) {
            //? Calculate the distance between the point gps given by the header and the ones in the json file
            let distance = distanceInKmBetweenEarthCoordinates(parseLat, parseLon, jFile.lat, jFile.lon);
            newArray.push(distance);
        }
        //? Find the key of the smallest distance
        let smallest = newArray.indexOf(Math.min(...newArray));
        return yield jsonFile[smallest];
    });
}
exports.findTheClosestCoordinateToPointOfInterest = findTheClosestCoordinateToPointOfInterest;
function reduceArray(array = []) {
    const res = array.reduce((accumulator, currentValue) => {
        let check = false;
        for (let acc of accumulator) {
            if (acc.name === currentValue.name) {
                check = true;
                currentValue.impressions === 1
                    ? acc.impressions++
                    : acc.clicks++;
            }
        }
        if (!check) {
            currentValue.impressions === 1 || currentValue.clicks === 1;
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    return res;
}
exports.reduceArray = reduceArray;
