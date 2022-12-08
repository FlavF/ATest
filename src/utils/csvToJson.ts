import csvToJson from "csvtojson";
import {IDatas, IDescription} from "./Interfaces";
import {readJson, writeToJson} from "./FunctionsJson";
import {findTheClosestCoordinateToPointOfInterest, reduceArray} from "./FunctionsForArray";

//?Datas
const csvFilePath = "data/events.csv";
const jsonPointsOfInterest = "data/points-of-interest.json";
const jsonDatas = "data/datas.json";

//? Read JSon file
const pointsOfInterest = readJson(jsonPointsOfInterest);

// CSV To JSON
//? convert CSV file to JSON array
export function convertToJson():void{ 
  csvToJson().fromFile(csvFilePath).then((datas : Array<IDatas>) => {
    //? Create the new patern of the JSON from csv datas
    const newJson: Array<IDescription> = datas.map((data) => ({
      lat: findTheClosestCoordinateToPointOfInterest(data.lat, data.lon, pointsOfInterest).lat,
      lon: findTheClosestCoordinateToPointOfInterest(data.lat, data.lon, pointsOfInterest).lon,
      name: findTheClosestCoordinateToPointOfInterest(data.lat, data.lon, pointsOfInterest).name,
      impressions: data.event_type === "imp"? 1: 0,
      clicks: data.event_type === "click"? 1 : 0
    }));
    
    //? Reduce the Array with the points of interest
    const arrayJson = reduceArray(newJson);
    
    //? Write the datas on the json file
    writeToJson(jsonDatas, arrayJson);
  });
}

convertToJson();
