import { readJson } from "../utils/FunctionsJson";

describe("csvToJson test", () => {
    test("Verify if JSon create take all the clicks and impressions of the csv file", () => { 
        function sumEventType(): number {
            //TODO : count the number of event_type or imp&click
            //on file CSV number of lines 
            return 223994
        }
        
        function sumImpClicks():number{
            //? Get the json datas
            const dataJSon = "data/datas.json";  
            const jsonDatas = readJson(dataJSon)
            let sumArray = []
            //? Make an array with all the total of imp+clicks
            for(let jsonData of jsonDatas){
                let sum = jsonData.impressions + jsonData.clicks
                sumArray.push(sum)
            }
            //? Sum of all 
            const calculateSum = sumArray.reduce((total,current)=>{
                return total + current
            },0)
            return calculateSum
        }
        
        //? To verify
        expect(sumImpClicks()).toBe(sumEventType())
    });
});
