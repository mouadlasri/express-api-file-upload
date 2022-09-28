// Import DB connection
const sqlDB = require("../db/connect");

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
