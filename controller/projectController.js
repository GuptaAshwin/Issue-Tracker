const projectSchema = require('../models/createProjectSchema');

module.exports.createProjectForm = function(req, res){
return res.render("create_project",{
    title: "Issue Tracker"
});
}