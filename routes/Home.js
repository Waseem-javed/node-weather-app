const express = require('express');

const router = express.Router();

const HomeController = require('../controllers/HomeController');
const AboutController = require("../controllers/AboutController");
const HelpController = require('../controllers/HelpController');

router.get("/", HomeController.getHomePage);

router.post("/search", HomeController.PostHomePage);

router.get('/about', AboutController.getAboutPage);
router.get('/help', HelpController.getHelpPage);

module.exports = router;