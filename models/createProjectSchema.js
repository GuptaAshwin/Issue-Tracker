const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true
        }, authorName: {
            type: String,
            requied: true
        },
        description: {
            type: String,
            required: true
        }
    },{
        timestamps:true
    }
)

const projectList = mongoose.model("ProjectList", projectSchema);
module.exports = projectList;