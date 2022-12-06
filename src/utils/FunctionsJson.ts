import fs from "node:fs";

export function readJson(jsonFile : string){
    const dataBUFFER = fs.readFileSync(jsonFile);
    const dataJSON = dataBUFFER.toString();
    return JSON.parse(dataJSON);
}

export function writeToJson(fileJson:string, datas){
    fs.writeFile(fileJson, JSON.stringify(datas, null, 4), (err) => {
        try {
            console.log("CSV to JSON done");
        } catch (error) {
            console.log(err);
        }
    });
}