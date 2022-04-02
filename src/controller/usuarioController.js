const {Op} = require('sequelize');
const Usuario = require("../model/Usuario");

    async function listar(req, res){
        let usuarios = await Usuario.findAll();
        res.render("../views/index.ejs", {Usuarios: usuarios});
    }

    async function listarPesquisa(req, res){
        let pesquisar = req.body.pesquisar;
        let usuarios = await Usuario.findAll({
            where: { nome: {[Op.iLike]: pesquisar} }
        });

        res.render("../views/index.ejs", {Usuarios: usuarios});
    }

    async function abreAdd(req,res){
        res.render("../views/add.ejs", {});
    }

    async function adicionar(req, res){
        const { nome, email, senha, foto } = req.body;
        await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
             res.redirect("/");
        });
    }

    async function abrirEdt(req,res){

    }

    async function edt(req,res){
    
    }

    async function del(req, res){
        let usuario = Usuario.findByPk(req.params.id);
        await usuario.destroy();
        res.redirect("/");
    }
module.exports = [listar, listarPesquisa, abreAdd, adicionar, abrirEdt, edt, del];