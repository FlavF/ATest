const Datas = require("../models/dataModels");

//  @des    Gets all datas
//  @route  GET /api/events

async function getDatas(req, res) {
  try {
    const datas = await Datas.findAll();

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(datas));
  } catch (error) {
    console.log(error);
  }
}

//  @des    Gets single datas
//  @route  GET /api/events

async function getData(req, res, lat:string, lon:string) {
  try {
    const data = await Datas.findByLocalisation(lat, lon);
    if (!data) {
      res.writeHead(404, {"Content-Type": "application/json"});
      res.end(JSON.stringify({message: "Datas not found"}));
    } else {
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getDatas,
  getData
};
