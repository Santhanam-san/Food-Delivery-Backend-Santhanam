const { Pricing } = require('../models/pricingModel');
const {Item} = require('../models/itemModel')

exports.calculatePrice = async (zone, organizationId, totalDistance, itemId) => {
  try {
    // Fetch pricing details from the database based on zone, organization, and item ID
    const pricingDetails = await Pricing.findOne({ 
      where: { 
        zone, 
        organization_id: organizationId, 
        item_id: itemId 
      } 
    });

    if (!pricingDetails) {
      throw new Error('Pricing details not found');
    }

    // Fetch item details from the database based on item ID
    const itemDetails = await Item.findByPk(itemId);

    if (!itemDetails) {
      throw new Error('Item details not found');
    }

    // Calculate total price based on pricing details, total distance, and item type
    let totalPrice = pricingDetails.fix_price;
    if (totalDistance > pricingDetails.base_distance_in_km) {
      const additionalDistance = totalDistance - pricingDetails.base_distance_in_km;
      const kmPrice = (itemDetails.type === 'perishable') ? pricingDetails.km_price : 1;
      totalPrice += additionalDistance * kmPrice;
    }

    return totalPrice;
  } catch (error) {
    throw new Error('Error calculating price: ' + error.message);
  }
};