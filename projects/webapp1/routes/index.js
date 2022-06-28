var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usuarios');
  collection.find({},{},function(e,docs){
      res.render('userlist', {
          "userlist" : docs
      });
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Adiciona Novo Usuário' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) { //action="/adduser"> 

  var db = req.db; //abre conexão com bd
  var collection = db.get('usuarios'); //verifico a colection

  // Obtém valores do formulário web
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Envia para o banco de dados
  collection.insert({ //comando do MongoDB
      "username" : userName,
      "email" : userEmail
  }, function (err, doc) {
      if (err) {
          res.send("Problema com o banco de dados.");
      }
      else {
          // E carrega a lista de usuários
          res.redirect("userlist");
      }
  });
});

module.exports = router;
