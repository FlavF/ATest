"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToJson = exports.readJson = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
function readJson(jsonFile) {
    const dataBUFFER = node_fs_1.default.readFileSync(jsonFile);
    const dataJSON = dataBUFFER.toString();
    return JSON.parse(dataJSON);
}
exports.readJson = readJson;
function writeToJson(fileJson, datas) {
    node_fs_1.default.writeFile(fileJson, JSON.stringify(datas, null, 4), (err) => {
        try {
            console.log("CSV to JSON done");
        }
        catch (error) {
            console.log(err);
        }
    });
}
exports.writeToJson = writeToJson;
