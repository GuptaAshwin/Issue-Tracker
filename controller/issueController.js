const List_of_issue = require('../models/createIssue')

module.exports.create = function (req, res) {
    List_of_issue.create(
        {
            projectName: req.body.Title,
            author: req.body.author,
            description: req.body.Desc,
            projectRef: req.body.projectRef,
        },
        function (err, project) {
            if (err) {
                console.log("error in creating a project", err);
                return;
            }
            console.log("Project Added Successfully in the list", project);
            return res.redirect('/');
        }
    )
}


module.exports.projectdetailpage =async function (req, res) {
    try {
        let issue = await List_of_issue.find({});
           
        return res.render('project_detail', {
            title: " Issue Tracker | Home ",
            all_issue: issue
        });


    } catch (err) {
        console.log('Error in ussue controller', err);
        return;
    };
};
module.exports.issuepage =async function (req, res) {   
           
        return res.render('create_issue', {
            title: " Issue Tracker | Home ",
            
        });

};
