const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bootcamps = require("./routes/bootcamps");
const connectDB = require("./config/db");
//ENV variables

dotenv.config({ path: "./config/config.env" });

//connect to db
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("App listening on port 5000!");
});
//handle unhandled promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`error:${err.message}`);
  //close server
  server.close(() => process.exit(1));
});
