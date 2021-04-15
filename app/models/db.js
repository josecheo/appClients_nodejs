// const mysql = require("mysql");
// const dbConfig = require("../../config/db.config");

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

// // open the MySQL connection
// connection.connect((error) => {
//   if (error) {
//     console.log("ERROR", error)
//   }else {
//     console.log("Successfully connected to the database.");
//   }
 
// });

// module.exports = connection;

// const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('clientes', 'admin', 'josecheo21', {
//   host: 'appclients.cbcqtl3ilgod.us-east-1.rds.amazonaws.com',
//   // dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
