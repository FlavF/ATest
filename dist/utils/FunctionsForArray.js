"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceArray = exports.chooseTheName = exports.findTheClosestCoordinateToPointOfInterest = exports.distanceInKmBetweenEarthCoordinates = void 0;
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
    return jsonFile[smallest];
}
exports.findTheClosestCoordinateToPointOfInterest = findTheClosestCoordinateToPointOfInterest;
function chooseTheName(latCSV, lonCSV, jsonFile) {
    let lat1 = parseFloat(latCSV);
    let lon1 = parseFloat(lonCSV);
    //TODO:For All GPS in point of interest and the lat1 & lon1
    // const data = jsonFile.find((j) => distanceInKmBetweenEarthCoordinates(lat1, lon1, j.lat, j.lon));
    // console.log(data)//! not ok revoir const data
    // let key = Object.keys(data).reduce((key, v) => (data[v] < data[key]? v : key))
    // return jsonFile[key].name
    // For 3 GPS coordinates
    let lat2 = jsonFile[0].lat;
    let lon2 = jsonFile[0].lon;
    let lat3 = jsonFile[1].lat;
    let lon3 = jsonFile[1].lon;
    //The closest localisation
    if (distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) > distanceInKmBetweenEarthCoordinates(lat1, lon1, lat3, lon3)) {
        return jsonFile[1].name;
    }
    else if (distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) < distanceInKmBetweenEarthCoordinates(lat1, lon1, lat3, lon3)) {
        return jsonFile[0].name;
    }
    else {
        throw "Not Possible";
    }
} // Try for multiple GPS coordinates ?
exports.chooseTheName = chooseTheName;
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
