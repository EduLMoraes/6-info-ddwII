var express = require("express");
var app = express();

const usuarioRoute = require('./src/routes/usuarioRoute')

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

require("./config/database.js");

app.use("/", usuarioRoute);

app.listen("3000", function () {
  console.log("Funcionando!!!")
})