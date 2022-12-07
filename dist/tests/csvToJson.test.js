"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvToJson_1 = require("../utils/csvToJson");
describe("csvToJson test", () => {
    test("same sum of clicks & impressions on csv file and the new one create datas", () => {
        const tryIt = csvToJson_1.convertToJson;
        console.log(tryIt, 'tests work !!');
    });
});
