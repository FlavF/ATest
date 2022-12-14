"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FunctionsJson_1 = require("../utils/FunctionsJson");
describe("csvToJson test", () => {
    test("Verify if JSon create take all the clicks and impressions of the csv file", () => {
        function sumEventType() {
            //TODO : count the number of event_type or imp&click
            //on file CSV number of lines 
            return 223994;
        }
        function sumImpClicks() {
            //? Get the json datas
            const dataJSon = "data/datas.json";
            const jsonDatas = (0, FunctionsJson_1.readJson)(dataJSon);
            let sumArray = [];
            //? Make an array with all the total of imp+clicks
            for (let jsonData of jsonDatas) {
                let sum = jsonData.impressions + jsonData.clicks;
                sumArray.push(sum);
            }
            //? Sum of all 
            const calculateSum = sumArray.reduce((total, current) => {
                return total + current;
            }, 0);
            return calculateSum;
        }
        //? To verify
        expect(sumImpClicks()).toBe(sumEventType());
    });
});
