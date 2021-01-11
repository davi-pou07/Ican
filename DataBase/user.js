const { STRING } = require('sequelize')
const Sequelize = require('sequelize')
const connection = require("./database")

const User= connection.define('users',{
    nome:{
        type:Sequelize.STRING,
        allowNull:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    senha:{

        type:Sequelize.STRING,
        allowNull:true
    },
    nivel:{
        type:Sequelize.INTEGER,
        allowNull:true
    }

})
User.sync({force:false}).then(()=>{
    console.log("Tabela User criada com sucesso!")
})

module.exports = User