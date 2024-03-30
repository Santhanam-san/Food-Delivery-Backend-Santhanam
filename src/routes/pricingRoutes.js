const express = require('express')
const router = express.Router();
const pricingController = require('../controllers/pricingController');

router.post('/', pricingController.calculatedPrice);

module.exports = router;
