const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

try {
  mongoose.connect(
    process.env.MONGO_DB_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, strictQuery: false},
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log(e);
}

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());



app.listen(8800, () => {
  console.log("Server is Running");
});