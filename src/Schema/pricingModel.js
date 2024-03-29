const { DataTypes } = require('sequelize');
const db = require('../database');
const Organization = require('./organizationModel');
const Item = require('./itemModel');

const Pricing = db.define('Pricing', {
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
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01 // Minimum price per km allowed
    }
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01 // Minimum fixed price allowed
    }
  }
});

module.exports = Pricing;
