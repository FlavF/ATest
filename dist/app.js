"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("node:http"));
const dataControllers_1 = require("./controllers/dataControllers");
const csvToJson_1 = require("./csvToJson");
//? Datas
const PORT = process.env.PORT || 8000;
//? Server
const server = http.createServer((req, res) => {
    //? create CSV file to a json file with points of interest
    csvToJson_1.convertToJson;
    if (req.url === "api/events/" && req.method == "GET") {
        (0, dataControllers_1.getDatas)(req, res);
    }
    else if (req.url.match(/\/api\/events\/([0-9]+)/) && req.method === "GET") {
        const localisation = req.url.split("/")[3]; //lat&lon
        let lat = localisation.split("&")[0];
        let lon = localisation.split("&")[1];
        (0, dataControllers_1.getData)(req, res, lat, lon);
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
//? To connect to the server
server.listen(PORT, () => console.log(`Server running at ${PORT}`));
