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
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// importing our Campaigns router
const campaigns = require("./routes/campaigns");

require("dotenv").config();

// Upload a single file
// app.post("/upload-file", async (req, res) => {
//   console.log(`Request body: `, req.files);
//   try {
//     if (!req.files) {
//       res.send({
//         status: false,
//         message: "No file uploaded",
//       });
//     } else {
//       let file = req.files.file;

//       // move the file into local folder using mv() function
//       file.mv("./uploads/" + file.name);

//       res.send({
//         status: true,
//         message: "File uploaded",
//         data: {
//           name: file.name,
//           mimetype: file.mimetype,
//           size: file.size,
//         },
//       });
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post("/upload-files", async (req, res) => {
//   console.log("Req Files: ", req.files);
//   try {
//     if (!req.files) {
//       res.send({
//         status: false,
//         message: "No files were uploaded",
//       });
//     } else {
//       var data = [];

//       if (req.files.file.length > 1) {
//         // loop through all the data
//         _.forEach(_.keysIn(req.files.file), (key) => {
//           let file = req.files.file[key];

//           // move file to uploads folder
//           file.mv(`./uploads/${req.body.id}/` + file.name);

//           // push file details
//           data.push({
//             name: file.name,
//             mimetype: file.mimetype,
//             size: file.size,
//           });
//         });
//       } else {
//         let file = req.files.file;

//         console.log("Only one file uploaded: ", file);
//         // move file to uploads folder
//         file.mv(`./uploads/${req.body.id}/` + file.name);
//         console.log("Data: ", data);

//         data.push({
//           name: file.name,
//           mimetype: file.mimetype,
//           size: file.size,
//         });
//       }

//       // return response
//       res.send({
//         status: true,
//         message: "Files were uploaded",
//         data: data,
//       });
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post("/create", (req, res) => {
//   console.log("REQ: ", req);

//   res.status(200).send({ Data: req.files });
// });

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
