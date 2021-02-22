const { STRING } = require('sequelize')
const Sequelize = require('sequelize')
const connection = require("./database")

const User= connection.define('users',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    senha:{

        type:Sequelize.STRING,
        allowNull:false
    },
    nivel:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    numero:{
        type:Sequelize.STRING,
        allowNull:false 
    },
    acesso:{
        type:Sequelize.INTEGER,
        allowNull:true
    }

})
User.sync({force:false}).then(()=>{
    console.log("Tabela User criada com sucesso!")
})

module.exports = User