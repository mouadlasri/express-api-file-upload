// Import DB connection
const sqlDB = require("../db/connect");
const _ = require("lodash");

// Controller has the following CRUD functions
// createCampaign
// findAllCampaigns
// findOneCampaign
// updateCampaign
// deleteCampaign

// Import Campaign model
const Campaign = require("../models/campaign.model.js");

// Create and save a new Campaign
exports.createCampaign = (req, res) => {
  console.log("\nController Files : ", req.files);
  // console.log("\nController image1 FileList : ", req);

  console.log("Create campaign route");

  // validate request
  if (!req.body) {
    res.status(400).send({
      message: "Request body is empty!",
    });
  }

  // Create a new campaign
  const newCampaign = new Campaign(req.body);

  // Save new campaign in database
  Campaign.create(newCampaign, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error creating a new campaign.",
      });
    } else {
      // send back the data that was saved in the database
      res.send(data);

      // if ciFile was uploaded, save file in server
      if (req.files) {
        let file = req.files.ciFile;

        file.mv(`./uploads/${data.id}/cifile/` + file.name);
      }

      // if image1 were uploaded, save file(s) in server
      if (req.files.image1) {
        console.log("File Image: ", req.body.image1);

        // Loop through the file array
        _.forEach(_.keysIn(req.files.image1), (key) => {
          let file = req.files.image1[key];

          // move files to uploads folder of the campaign id
          file.mv(`./uploads/${data.id}/image1/` + file.name);
        });
      }
    }
  });
};

// Retrieve all Campaigns from the database (with condition).
exports.findAllCampaigns = (req, res) => {};

// Find a single Campaign with a id
exports.findOneCampaign = (req, res) => {};

// Update a Campaign identified by the id in the request
exports.updateCampaign = (req, res) => {};

// Delete a Campaign with the specified id in the request
exports.deleteCampaign = (req, res) => {};
