export function chooseTheName(latCSV : string, lonCSV : string, jsonFile) {
    let lat = parseFloat(latCSV);
    let lon = parseFloat(lonCSV);
    
    //The closest localisation
    //TODO : update the if with the real formula
    if (jsonFile[0].lat === lat && jsonFile[0].lon === lon) {
        return jsonFile[0].name;
    } else if (jsonFile[1].lat === lat && jsonFile[1].lon === lon) {
        return jsonFile[1].name;
    } else if (Math.abs(jsonFile[0].lat - lat) > Math.abs(jsonFile[1].lat - lat) && Math.abs(jsonFile[0].lon - lon) > Math.abs(jsonFile[1].lon - lon)) {
        return jsonFile[1].name;
    } else if (Math.abs(jsonFile[1].lat - lat) > Math.abs(jsonFile[0].lat - lat) && Math.abs(jsonFile[1].lon - lon) > Math.abs(jsonFile[0].lon - lon)) {
        return jsonFile[0].name;
    } else {
        return jsonFile[0].name; //Not correct need to update all the function
    }
    //TODO: Look for ideas for the others possibilities. Not sure if it's the best to check the closer localisation between points. Find a better function (package?) 
    //TODO check the calculus : http://www.movable-type.co.uk/scripts/latlong.html
}

export function reduceArray(array= []) {
    const res = array.reduce((accumulator, currentValue) => {
        let check : boolean = false;
        for (let acc of accumulator) {
            if (acc.name === currentValue.name) {
                check = true;
                (currentValue.impressions === 1)? acc.impressions++ : acc.clicks++
            }
        }
        if (!check) {
            currentValue.impressions === 1 || currentValue.clicks === 1
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    return res;
}