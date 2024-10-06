require("dotenv").config();
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: process.env.NODE_ENV === "development" ? console.log : false,
});
