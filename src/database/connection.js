// Get Sequelize here ...
const Sequelize = require('sequelize')

// Create db variable here ...
const db = {}

// Create sequelize variable and get config as object here ...
// Customize your database config
const sequelize = new Sequelize("b35_dumbmerch", "postgres", "root", {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
})

// Enter the database config to sequelize here ...
db.sequelize = sequelize

// Create exports module db here ...
module.exports = db;