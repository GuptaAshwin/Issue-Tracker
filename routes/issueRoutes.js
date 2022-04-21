const express = require('express');
const router = express.Router();

const issueController = require('../controller/issueController');

router.get("/project_detail" ,  issueController.projectdetailpage );
router.post("/create",  issueController.create  );
router.get("/create_issue" ,  issueController.issuepage );


module.exports= router;