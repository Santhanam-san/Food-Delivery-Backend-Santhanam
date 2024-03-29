const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Organization = db.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Organization;
