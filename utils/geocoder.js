const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  provider: process.env.GEOCODER_PROVIDER,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
