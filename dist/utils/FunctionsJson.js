"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    return __awaiter(this, void 0, void 0, function* () {
        yield node_fs_1.default.writeFile(fileJson, JSON.stringify(datas, null, 4), (err) => {
            try {
                console.log("CSV to JSON done");
            }
            catch (error) {
                console.log(err);
            }
        });
    });
}
exports.writeToJson = writeToJson;
