const express = require("express");
const router = express.Router();

const getController = require("../controllers/getData");

router.get("/allinfo",getController.getAllinfo);

router.get('/exists/',getController.isUserExists);

router.get("/details/",getController.getDetails);


module.exports = router;