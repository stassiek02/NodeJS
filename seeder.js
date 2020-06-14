const fs = require("fs");

const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// load env

dotenv.config({ path: "./config/config.env" });

const Bootcamp = require("./models/Bootcamp");
