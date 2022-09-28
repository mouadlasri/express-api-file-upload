const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");

const connectDB = require("./db/connect");

const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

//add other middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// importing our Campaigns router
const campaigns = require("./routes/campaigns");

require("dotenv").config();

// routes
app.use("/api/v1/campaigns", campaigns);

//start app
const port = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(port, () => console.log(`App is listening on port ${port}.`));
  } catch (error) {
    console.log(error);
  }
};

start();
