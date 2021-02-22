const express = require('express')
const User = require("../DataBase/user")
const Sequelize = require("sequelize")
const router = express.Router()
const bcrypt = require("bcryptjs")
router.get("/admin/user", (req, res) => {
    res.send("ISAIAS ESTOU EM PAUSA NÃO ME INCOMODE!")
})


router.get("/admin/new", (req, res) => {
    res.render("admin/new")
})
router.post("/admin/adicionar", (req, res) => {
    var nome = req.body.nome
    var email = req.body.email
    var pass1 = req.body.pass1
    var senha = req.body.senha
    var nivel = req.body.nivel
    var numero = req.body.telefone
    if (pass1 == senha && senha != undefined) {
        User.findOne({ where: { email: email } }).then(emai => {
            if (emai == undefined) {
                User.findOne({ where: { numero: numero } }).then(num => {
                    if (num == undefined) {
                        var salt = bcrypt.genSaltSync(10)
                        var hash = bcrypt.hashSync(senha, salt)
                        User.create({
                            nome: nome,
                            email: email,
                            nivel: nivel,
                            numero: numero,
                            senha: hash
                        }).then(() => {
                            res.redirect("/admin/user")
                        }).catch(err => {
                            res.redirect("/admin/new")
                        })
                    } else {
                        res.redirect("/admin/new")
                    }
                })
            }res.redirect("/admin/new")
        })
    }else{
    }
})

router.post("/user/senha", (req, res) => {


})

module.exports = router