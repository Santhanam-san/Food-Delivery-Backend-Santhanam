const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Organization = require('./organizationModel');
const Item = require('./itemModel');

const Pricing = sequelize.define('Pricing', {
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Organization,
      key: 'id'
    }
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: 'id'
    }
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1 // Minimum distance allowed
    }
  },
  km_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
        notNull: true,
        isDecimal: true,
        min: 0
    }
  },
  fix_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1 // Minimum fixed price allowed
    }
  }
});

module.exports = Pricing;
