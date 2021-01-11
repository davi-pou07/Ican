const Sequelize = require('sequelize')

const connection = new Sequelize('ican','root','davi6259',{
    host:'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection