//express
const express = require('express')
const app = express()
const connection = require('./DataBase/database')
const User = require("./DataBase/user")
const userController = require("./admin/userController")
//Connection
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })

//body-parser
var  bodyParser  = require ('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//ejs
app.set('view engine','ejs')
//Arquivos estaticos
app.use(express.static('public'))


app.use("/",userController)
//Rotas
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT || 8080,()=>{
    console.log("SERVIDOR OK")
})