const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true
        }, Desc: {
            type: String,
            requied: true
        },
        label: {
            type: String,
            required: true
        }, author: {
            type: String,
            required: true
        }
    },{
        timestamps:true
    }
)

const issueList = mongoose.model("issueList", issueSchema);
module.exports = issueList;