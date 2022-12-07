import * as http from "node:http";
const {getDatas, getData} = require("./controllers/dataControllers");
const convertToJson = require("./utils/csvToJson");

//? Datas
const PORT: string | number = process.env.PORT || 8000;

//? CSV file to a json file with points of interest
convertToJson;

//? Server
const server = http.createServer((req, res) => {
  if (req.url === "api/events/" && req.method == "GET") {
    getDatas(req, res);
  } else if (req.url !.match(/\/api\/events\/([0-9]+)/) && req.method === "GET") {
    const localisation: string = req.url !.split("/")[3]; //lat&lon
    let lat = localisation.split("&")[0];
    let lon = localisation.split("&")[1];
    console.log(lat,lon)
    getData(req, res, lat, lon);
  } else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Route not found"}));
  }
});

//? To connect to the server
server.listen(PORT, () => console.log(`Server running at ${PORT}`));
