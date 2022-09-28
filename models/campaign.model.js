const sql = require("../db/connect.js");

// Constructor
const Campaign = function (campaign) {
  this.name = campaign.jobTitle;
  this.job_type = campaign.jobType;
  this.location = campaign.location;
  this.search_quantity = campaign.searchQuantity;
  this.workplace = campaign.workplace;
  this.targeting = campaign.targeting;
  this.search_radius = campaign.searchRadius;
  this.start_date = campaign.startDate;
  this.end_date = campaign.endDate;
  this.without_end = campaign.withoutEnd;
  this.limitation = campaign.limitation;
  this.parttime = campaign.parttime;
  this.career_changer = campaign.careerChanger;
  this.work_students = campaign.workStudents;
  this.works_council = campaign.worksCouncil;
  this.career_chances = campaign.careerChances;
  this.training_opportunities = campaign.trainingOpportunities;
  this.contact_greeting = campaign.contactGreeting;
  this.contact_firstname = campaign.contactFirstname;
  this.contact_lastname = campaign.contactLastname;
  this.contact_telephone = campaign.contactTelephone;
  this.contact_email = campaign.contactEmail;
  this.budget = campaign.budget;
  this.ci_information = campaign.ciInformation;
  this.formulations = campaign.formulations;
  this.other_ci_Information = campaign.otherCiInformation;
  this.ci_file_id = campaign.ciFileId;
  this.images_file_id = campaign.imagesFileId;
  this.marketing_platforms = campaign.marketingPlatforms;
  this.status = campaign.status;
  this.warranty = campaign.warranty;
  this.budget_left = campaign.budgetLeft;
  this.created_at = campaign.created_at;
  this.updated_at = campaign.updated_at;
  this.company_id = campaign.company_id;
};

// Create a new campaign
Campaign.create = (newCampaign, result) => {
  console.log("New Campaign => ", newCampaign);
  sql.query("INSERT INTO Campaigns SET ?", newCampaign, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    // insertId gets the ID of the recently inserted row
    // console.log("Created campaign: ", { id: res.insertId, ...newCampaign });
    result(null, { id: res.insertId, ...newCampaign });
  });
};

module.exports = Campaign;
