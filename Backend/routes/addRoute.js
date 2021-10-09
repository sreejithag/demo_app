const express = require("express");
const router = express.Router();

const addController = require("../controllers/addData");

router.post("/", addController.add);


module.exports = router;
