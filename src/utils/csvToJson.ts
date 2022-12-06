import CSVToJSON from "csvtojson";
import fs from "node:fs";

interface IDatas {
    lat: string;
    lon: string;
    event_type?: string;
}

interface IDescription {
    lat: number;
    lon: number;
    name: string;
    impressions: number;
    clicks: number;
}

//? Read JSon f
const dataBUFFER = fs.readFileSync("data/points-of-interest.json");
const dataJSON = dataBUFFER.toString();
const pointsOfInterest = JSON.parse(dataJSON);

// For 2 points of interest
export function chooseTheName(latCSV : string, lonCSV : string) {
    let lat = parseFloat(latCSV);
    let lon = parseFloat(lonCSV);
    
    if (pointsOfInterest[0].lat === lat && pointsOfInterest[0].lon === lon) {
        return pointsOfInterest[0].name;
    } else if (pointsOfInterest[1].lat === lat && pointsOfInterest[1].lon === lon) {
        return pointsOfInterest[1].name;
    } else if (Math.abs(pointsOfInterest[0].lat - lat) > Math.abs(pointsOfInterest[1].lat - lat) && Math.abs(pointsOfInterest[0].lon - lon) > Math.abs(pointsOfInterest[1].lon - lon)) {
        return pointsOfInterest[1].name;
    } else if (Math.abs(pointsOfInterest[1].lat - lat) > Math.abs(pointsOfInterest[0].lat - lat) && Math.abs(pointsOfInterest[1].lon - lon) > Math.abs(pointsOfInterest[0].lon - lon)) {
        return pointsOfInterest[0].name;
    } else {
        return "Autre point d'interet";
    }
    //TODO: Look for idea for the 2 others possibilities
}



console.log()

//? convert CSV file to JSON array
CSVToJSON().fromFile("data/events.csv").then((datas: Array<IDatas>) => {
    //? Create the new patern of the JSON from csv datas
    const newJson : Array<IDescription> = datas.map(data => ({
        lat: (chooseTheName(data.lat,data.lon) === pointsOfInterest[0].name)? pointsOfInterest[0].lat : pointsOfInterest[1].lat,
        lon: (chooseTheName(data.lat,data.lon) === pointsOfInterest[0].name)? pointsOfInterest[0].lon : pointsOfInterest[1].lon,
        name : chooseTheName(data.lat,data.lon) ,
        impressions : (data.event_type === "imp")? 1 : 0,
        clicks : (data.event_type === "click")? 1 : 0
    }))
    
    //? Add all data only with the 2 points of interest
    // const datasJson = (newJson= []) => {
    //     const res = newJson.reduce((accumulator, currentValue) => {
    //         let check = false;
    //         for (let acc of accumulator) {
    //             if (acc.name === currentValue.name) {
    //                 check = true;
    //                 if(currentValue.impressions === 1){
    //                     acc.impressions++
    //                 }else if(currentValue.clicks === 1){
    //                     acc.clicks++;
    //                 } else {
    //                     console.log("error: not possible")
    //                 }
    //             }
                
    //             if (!check) {
    //                 if(currentValue.impressions === 1){
    //                     acc.impressions++;
    //                 }else if(currentValue.clicks === 1){
    //                     acc.clicks++;
    //                 } else {
    //                     console.log("error: not possible")
                        
    //                 }
    //                 accumulator.push(currentValue);
    //             }
    //             return accumulator;
    //         }, []);
    //         return res;
    //     }
    //     console.log(datasJson(newJson));
        
        
        fs.writeFile("data/datas.json", JSON.stringify(newJson, null, 4), (err) => {
            try {
                console.log("CSV to JSON done")
            } catch (error) {
                console.log(err);
            }
        });
        
    })
    
    
    // module.exports = {
    //     // convertToJson
    // }