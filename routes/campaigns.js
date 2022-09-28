const { Router } = require("express");
const router = Router();
const db = require("../db/connect");
const uuid = require("uuid");

const campaigns = require("../controllers/campaign.controller.js");

router.use((req, res, next) => {
  console.log("Request made to /CAMPAIGNS ROUTE");
  next();
});

router.post("/create", campaigns.createCampaign);

// router.use((req, res, next) => {
//   console.log("Request made to /CAMPAIGNS ROUTE");
//   next();
// });

// router.get("/", (req, res) => {
//   res.status(200).send({ Status: "200" });
// });

// router.post("/create", (req, res) => {
//   const { campaign_name } = req.body;
//   const { file } = req.files;

//   if (campaign_name) {
//     try {
//       let newUuid = uuid.v1();
//       let str = `INSERT INTO dummy_table VALUES('${newUuid}','${file.name}', '${campaign_name}')`;
//       console.log("Query string: ", str);
//       db.promise().query(str);
//       res.status(201).send({ msg: "Created Campaign" });

//       file.mv(`./uploads/${newUuid}/` + file.name);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

module.exports = router;
