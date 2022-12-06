const datas = require("../../data/points-of-interest.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(datas);
  });
}

function findByLocation(location : string) {
  return new Promise((resolve, reject) => {
    let lat = location.split("&")[0];
    let lon = location.split("&")[1];

    const data = datas.find((d) => d.lat === lat && d.lon === lon);
    resolve(data);
  });
}

module.exports = {
  findAll,
  findByLocation
};
