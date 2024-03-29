const { Pricing } = require('../models');

exports.calculatePrice = async (zone, organizationId, totalDistance, itemType) => {
  // Fetch pricing details from the database based on zone, organization, and item type
  const pricingDetails = await Pricing.findOne({ where: { zone, organization_id: organizationId, item_type: itemType } });

  // Calculate total price based on pricing details and total distance
  let totalPrice = pricingDetails.fix_price;
  if (totalDistance > pricingDetails.base_distance_in_km) {
    const additionalDistance = totalDistance - pricingDetails.base_distance_in_km;
    totalPrice += additionalDistance * pricingDetails.km_price;
  }

  return totalPrice;
};
