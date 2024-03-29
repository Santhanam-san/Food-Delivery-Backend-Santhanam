const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',  
  host: 'localhost',    // Database host
  port: 5432,           // Database port
  username:"santhanam", // Database username
  password: "12345678", // Database password
  database: "FoodDeliverybackend-Santhanam", // Database name
});


async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = sequelize;
