import {findTheClosestCoordinateToPointOfInterest} from "../utils/FunctionsForArray"
import { readJson } from "../utils/FunctionsJson";

describe("Functions for array test", ()=>{
    
    test("closest coordinates with points of interest coordinates", () =>{  
        const jsonFile = [
            {
                lat: 0.01,
                lon: 0.00,
                name: "Somewhere",
                impressions: 1,
                clicks: 2
            }, {
                lat: 50,
                lon: 50,
                name: "Unknow Place",
                impressions: 11,
                clicks: 14
            }
        ]; 
        
        const test = findTheClosestCoordinateToPointOfInterest("0","0",jsonFile)
        
        const answer = {
            lat: 0.01,
            lon: 0.00,
            name: "Somewhere",
            impressions: 1,
            clicks: 2
        }
        
        expect(test).toEqual(answer)
    })
})




