const express = require('express')
const router = express.Router();
const pricingController = require('../controllers/pricingController');

router.post('/pricing', pricingController.calculatedPrice);

module.exports = router;
