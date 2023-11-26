const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = process.env.JAWSDB_URL 
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: process.env.DB_HOST,
//       dialect: 'mysql',
//       port: process.env.DB_PORT
//       // dialectOptions: {
//       //   decimalNumbers: true,
//       // },
//     });

let sequelize;

if (process.env.MYSQL_URL) {
  sequalize = new Sequelize(process.env.MYSQL_URL);
} else {
  sequalize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  )
}
module.exports = sequelize;