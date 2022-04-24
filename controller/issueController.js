const List_of_issue = require('../models/createIssue')
const project_det = require('../models/createProjectSchema');
const all_issue_list = require('../models/listOfIssue');

module.exports.create = async function (req, res) {
    console.log(req.body);
    let distinctIssue = await List_of_issue.findOne({ label: req.body.label });
    if (distinctIssue) {
        return res.redirect('/');
    }
    List_of_issue.create(
        {
            Title: req.body.Title,
            author: req.body.author,
            label: req.body.label,
            Desc: req.body.Desc,
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


module.exports.projectdetailpage = async function (req, res) {
    console.log(req.params.id);
    try {
        let issue = await List_of_issue.find({});
        let projectDetail = await project_det.findById(req.params.id);
        let arr = [];
        for (let i of issue) {
            for (let j of i.label) {
                arr.push(j);
            }
        }
        console.log(arr);
        return res.render('project_detail', {
            title: " Issue Tracker | Home ",
            project_detail: projectDetail,
            all_issue: issue,
            issue: arr
        });


    } catch (err) {
        console.log('Error in ussue controller', err);
        return;
    };
};
module.exports.issuepage = async function (req, res) {

    return res.render('create_issue', {
        title: " Issue Tracker | Home ",

    });

};


module.exports.filter = async function (req, res) {

let allIssue = await all_issue_list.create();
   
        for (let i of req.body.label) {
            let projectList = await List_of_issue.findOne({ label: i });
            // issueArray.push(projectList);
            allIssue.issue.push(projectList);
            allIssue.save();
        }
        
        let issueList1 = await List_of_issue.findOne({Title : req.body.Title});
        allIssue.issue.push(issueList1);
        allIssue.save();
    
        let issueList2 = await List_of_issue.findOne({Desc : req.body.Desc});
        allIssue.issue.push(issueList2);
        allIssue.save();


}
