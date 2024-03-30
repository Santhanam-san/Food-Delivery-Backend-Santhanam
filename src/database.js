require('dotenv').config();
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'postgres',  
//   host: 'localhost',    // Database host
//   port: 5432,           // Database port
//   database: "FoodDeliverybackend-Santhanam", // Database name
//   username:"santhanam", // Database username
//   password: "12345678", // Database password
 
// });
const dbConnection = process.env.DB_CONNECTION;
const sequelize = new Sequelize(dbConnection, {
  dialectOptions: {
    ssl: {
      require: true, // Require SSL/TLS
      rejectUnauthorized: false // Accept self-signed certificates (if applicable)
    }
  }
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
