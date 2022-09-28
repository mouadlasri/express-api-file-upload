const sql = require("../db/connect.js");

// Constructor
const Campaign = function (campaign) {
  this.name = campaign.name;
  this.job_type = campaign.job_type;
  this.location = campaign.location;
  this.search_quantity = campaign.search_quantity;
  this.workplace = campaign.workplace;
  this.targeting = campaign.targeting;
  this.search_radius = campaign.search_radius;
  this.start_date = campaign.start_date;
  this.end_date = campaign.end_date;
  this.without_end = campaign.without_end;
  this.limitation = campaign.limitation;
  this.parttime = campaign.parttime;
  this.career_changer = campaign.career_changer;
  this.work_students = campaign.work_students;
  this.works_council = campaign.works_council;
  this.career_chances = campaign.career_chances;
  this.training_opportunities = campaign.training_opportunities;
  this.contact_greeting = campaign.contact_greeting;
  this.contact_firstname = campaign.contact_firstname;
  this.contact_lastname = campaign.contact_lastname;
  this.contact_telephone = campaign.contact_telephone;
  this.contact_email = campaign.contact_email;
  this.budget = campaign.budget;
  this.ci_information = campaign.ci_information;
  this.formulations = campaign.formulations;
  this.other_ci_Information = campaign.other_ci_Information;
  this.ci_file_id = campaign.ci_file_id;
  this.images_file_id = campaign.images_file_id;
  this.marketing_platforms = campaign.marketing_platforms;
  this.status = campaign.status;
  this.warranty = campaign.warranty;
  this.budget_left = campaign.budget_left;
  this.created_at = campaign.created_at;
  this.updated_at = campaign.updated_at;
  this.company_id = campaign.company_id;
};

// Create a new campaign
Campaign.create = (newCampaign, result) => {
  sql.query("INSERT INTO Campaigns SET ?", newCampaign, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created campaign: ", { id: res.insertId, ...newCampaign });
    result(null, { id: res.insertId, ...newCampaign });
  });
};

module.exports = Campaign;
