const express = require('express')
const User = require("../DataBase/user")
const Sequelize = require("sequelize")
const router = express.Router()

router.get("/admin/user",(req,res)=>{
    res.send("ISAIAS ESTOU EM PAUSA NÃO ME INCOMODE!")
})

router.get("/admin/new",(req,res)=>{
    res.render("admin/new")
})
router.post("/admin/adicionar",(req,res)=>{
    var nome = req.body.nome
    var email = req.body.email
    var senha = req.body.senha
    var nivel = req.body.nivel
    User.create({
        nome:nome,
        email:email,
        senha:senha,
        nivel:nivel
    }).then(()=>{
        res.redirect("/admin/user")
    })
router.post("/user/senha",(req,res)=>{


})

})

module.exports = router