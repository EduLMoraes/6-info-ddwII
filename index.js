var express = require("express");
var app = express();
var path = require("path");
const {Op} = require('sequelize');

const Usuario = require("./src/model/Usuario.js");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

require("./config/database.js");

//Adcionar dados
app.get("/add", function(req,res){
  res.render("add.ejs",{});
});
app.post("/add", async function (req, res) {
    const { nome, email, senha, foto } = req.body;
    await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
      res.redirect("/");
    });
  });

  //tabela
app.get("/", async function (req, res) {
    let usuarios = await Usuario.findAll();
    res.render("index.ejs", {Usuarios: usuarios});
});

//pesquisar
app.get("/", async function (req, res) {
  let pesquisar = req.body.pesquisar;
  let usuarios = await Usuario.findAll({
    where: { nome: {[Op.iLike]: pesquisar} }
  });
  res.render("index.ejs", {Usuarios: usuarios});
});


//deletando dados
app.get("/del/:id", async function (req, res) {
    let usuario = Usuario.findByPk(req.params.id);
    await usuario.destroy();
    res.redirect("/");
});

app.listen('3000', function () {
    console.log("funcionando");
});