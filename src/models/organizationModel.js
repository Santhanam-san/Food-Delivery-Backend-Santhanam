const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Organization = sequelize.define('Organization', {
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
sequelize.sync({ force: true }) // Sync all defined models to the database
  .then(() => {
    console.log('Tables synced successfully');
  })
  .catch(err => {
    console.error('Error syncing tables:', err);
  })
module.exports = Organization;
