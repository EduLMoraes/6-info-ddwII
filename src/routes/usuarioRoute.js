var express = require ("express");
var router = express.Router();
var usuarioController = require ("../controller/usuarioController");

//listar todos dados
router.get("/", usuarioController.listar);

//pesquisar
router.post("/", usuarioController.listarPesquisa);

//abrir add
router.get("/add", usuarioController.abreAdd);

//adicionar dado
router.post("/add", usuarioController.adicionar);

//abrir editar
router.get("/edt", usuarioController.abrirEdt);

//editar dados
router.post("/edt", usuarioController.edt);

//deletar dados
router.get("/del", usuarioController.del);

module.exports = router;