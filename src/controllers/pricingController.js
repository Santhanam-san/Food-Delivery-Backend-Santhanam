const pricingService = require('../services/pricingLogic');

exports.calculatedPrice = async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const totalPrice = await pricingService.calculatePrice(zone, organization_id, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad Request' });
  }
};
