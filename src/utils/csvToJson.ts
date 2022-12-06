import CSVToJSON from "csvtojson";
import { IDatas, IDescription } from "./Interfaces";
import {readJson, writeToJson} from "./FunctionsJson";
import { chooseTheName, reduceArray } from "./FunctionsForArray";

//? Read JSon file
const pointsOfInterest = readJson("data/points-of-interest.json")

//? convert CSV file to JSON array
const convertToJson = CSVToJSON().fromFile("data/events.csv").then((datas: Array<IDatas>) => {
    //? Create the new patern of the JSON from csv datas
    const newJson : Array<IDescription> = datas.map(data => ({
        lat:(chooseTheName(data.lat, data.lon, pointsOfInterest) == pointsOfInterest[0].name)? pointsOfInterest[0].lat :pointsOfInterest[1].lat,
        lon: (chooseTheName(data.lat, data.lon, pointsOfInterest) == pointsOfInterest[0].name)? pointsOfInterest[0].lon :pointsOfInterest[1].lon,
        name : chooseTheName(data.lat,data.lon, pointsOfInterest),
        impressions : (data.event_type === "imp")? 1 : 0,
        clicks : (data.event_type === "click")? 1 : 0
    }))
    
    //? Reduce the Array with the points of interest
    reduceArray(newJson)
    
    //? Write the datas on the json file
    writeToJson("data/datas.json", reduceArray(newJson))
})


module.exports = {
    convertToJson
}