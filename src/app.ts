import * as http from "node:http";
const {getDatas, getData} = require("./controllers/dataController");

//TODO : transforme the CSV file to a json file with points of interest

//? Server
const server = http.createServer((req, res) => {
  if (req.url === "api/events/" && req.method == "GET") {
    getDatas(req, res);
  } else if (req.url.match(/\/api\/events\/([0-9]+)/) && req.method === "GET") {
    const location: string = req.url.split("/")[3]!; //lat&lon
    getData(req, res, location);
  } else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Route not found"}));
  }
});

module.exports = {
  server
};
