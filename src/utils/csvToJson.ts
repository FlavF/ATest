const CSVToJSON = require("csvtojson");
import fs from "node:fs";

interface IDatas {
    lat :string
    lon : string
    event_type ?: string
}

interface IDescription extends IDatas{
    name:string
    impressions:number
    clicks:number
}


//? convert CSV file to JSON array
const convertToJson = CSVToJSON().fromFile("data/events.csv").then((datas: Array[datas]) => {
    
    const newJson : Array<IDescription> = datas.map((data)=>({
        lat:data.lat,
        lon:data.lon,
        name:"",
        impressions:(data.event_type === "imp")? 1 : 0,
        clicks:(data.event_type === "click")? 1 : 0
    })
    
    // console.log(newJSon)
    
    
    
    // write CSV transform to JSON file
    // fs.writeFile("data/points-of-interest.json", JSON.stringify(newEvents, null, 4), (err:string) => {
    //     if (err) {
    //       throw err;
    //     }
    //console.log("CSV to JSON done")
    //   });
    // }).catch((err:string) => {
    // log error if any
    //   console.log(err);
})


module.exports = {
    convertToJson
}