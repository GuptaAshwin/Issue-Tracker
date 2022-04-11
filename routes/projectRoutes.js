const express = require('express');
const router = express.Router();

const projectController = require("../controller/projectController");

router.get("/create_project" ,  projectController.createProjectForm );


module.exports= router;
