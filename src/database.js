const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',  
  host: 'localhost',    // Database host
  port: 5432,           // Database port
  username: 'your_username', // Database username
  password: 'your_password', // Database password
  database: 'your_database_name', // Database name
});


async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = { sequelize, testDatabaseConnection };
