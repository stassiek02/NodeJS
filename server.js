const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
//ENV variables

dotenv.config({ path: "./config/config.env" });

const bootcamps = require("./routes/bootcamps");
//connect to db
connectDB();

const app = express();

//BODY parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/bootcamps", bootcamps);

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("App listening on port 5000!".yellow.bold);
});
//handle unhandled promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`error:${err.message}`.red);
  //close server
  server.close(() => process.exit(1));
});
