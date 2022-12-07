const { convertToJson } = require("../utils/csvToJson");
describe("csvToJson test", () => {
    test("same sum of clicks & impressions on csv file and the new one create datas", () => {
        const result = convertToJson;
        expect(result).toBe(convertToJson);
    });
});
