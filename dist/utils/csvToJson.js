"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseTheName = void 0;
const csvtojson_1 = __importDefault(require("csvtojson"));
const node_fs_1 = __importDefault(require("node:fs"));
//TODO : reduce row with OOP
//? Read JSon file
const dataBUFFER = node_fs_1.default.readFileSync("data/points-of-interest.json");
const dataJSON = dataBUFFER.toString();
const pointsOfInterest = JSON.parse(dataJSON);
// For 2 points of interest
function chooseTheName(latCSV, lonCSV) {
    let lat = parseFloat(latCSV);
    let lon = parseFloat(lonCSV);
    if (pointsOfInterest[0].lat === lat && pointsOfInterest[0].lon === lon) {
        return pointsOfInterest[0].name;
    }
    else if (pointsOfInterest[1].lat === lat && pointsOfInterest[1].lon === lon) {
        return pointsOfInterest[1].name;
    }
    else if (Math.abs(pointsOfInterest[0].lat - lat) > Math.abs(pointsOfInterest[1].lat - lat) && Math.abs(pointsOfInterest[0].lon - lon) > Math.abs(pointsOfInterest[1].lon - lon)) {
        return pointsOfInterest[1].name;
    }
    else if (Math.abs(pointsOfInterest[1].lat - lat) > Math.abs(pointsOfInterest[0].lat - lat) && Math.abs(pointsOfInterest[1].lon - lon) > Math.abs(pointsOfInterest[0].lon - lon)) {
        return pointsOfInterest[0].name;
    }
    else {
        return "Autre point d'interet";
    }
    //TODO: Look for ideas for the 2 others possibilities
}
exports.chooseTheName = chooseTheName;
//? convert CSV file to JSON array
const convertToJson = (0, csvtojson_1.default)().fromFile("data/events.csv").then((datas) => {
    //? Create the new patern of the JSON from csv datas
    const newJson = datas.map(data => ({
        lat: (chooseTheName(data.lat, data.lon) === pointsOfInterest[0].name) ? pointsOfInterest[0].lat : pointsOfInterest[1].lat,
        lon: (chooseTheName(data.lat, data.lon) === pointsOfInterest[0].name) ? pointsOfInterest[0].lon : pointsOfInterest[1].lon,
        name: chooseTheName(data.lat, data.lon),
        impressions: (data.event_type === "imp") ? 1 : 0,
        clicks: (data.event_type === "click") ? 1 : 0
    }));
    //? Add all data only with the 2 points of interest
    const datasJson = (newJson = []) => {
        const res = newJson.reduce((accumulator, currentValue) => {
            let check = false;
            for (let acc of accumulator) {
                if (acc.name === currentValue.name) {
                    check = true;
                    (currentValue.impressions === 1) ? acc.impressions++ : acc.clicks++;
                }
            }
            if (!check) {
                currentValue.impressions === 1 || currentValue.clicks === 1;
                accumulator.push(currentValue);
            }
            return accumulator;
        }, []);
        return res;
    };
    //? write the datas on the json file
    node_fs_1.default.writeFile("data/datas.json", JSON.stringify(datasJson(newJson), null, 4), (err) => {
        try {
            console.log("CSV to JSON done");
        }
        catch (error) {
            console.log(err);
        }
    });
});
module.exports = {
    convertToJson
};
