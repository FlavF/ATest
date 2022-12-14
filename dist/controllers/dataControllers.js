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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.getDatas = void 0;
const Datas = require("../models/dataModels");
//  @des    Gets all datas
//  @route  GET /api/events
function getDatas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const datas = yield Datas.findAll();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(datas));
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getDatas = getDatas;
//  @des    Gets single datas
//  @route  GET /api/events
function getData(req, res, lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield Datas.findByCoordinates(lat, lon);
            if (!data) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Datas not found" }));
            }
            else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(data));
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getData = getData;
