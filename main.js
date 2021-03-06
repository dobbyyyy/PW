const express = require('express');
const app = express();
const port = process.env.PORT;
var cors = require('cors');
const bd = require('./backend/config/mysql1');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const users = require('./backend/controllers_antigos/users.js');
//const expressValidator = require('express-validator'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./passport.js')(passport);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(cors({
  exposedHeaders: ['Location'],
}));

app.use(session({
  secret: 'asae',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 60000,
    httpOnly: true,
  }
}));

//app.use(expressValidator());
app.use(function(req, res, next) {
  // check if session exists
  if (global.sessData === undefined) {
    global.sessData = req.session;
    global.sessData.ID = req.sessionID;
  }
  else { // yes, cookie was already present
    console.log('session exists', global.sessData.ID);
  }
  next();
});

//const router = require('express').Router();
//module.exports=router

//Abrir o HTML...
app.use(express.static('/frontend'));
app.use('/styleindex.css', express.static(__dirname + '/frontend/css/styleindex.css'))
app.use('/app.js', express.static(__dirname + '/frontend/pages/app.js'))
app.use('/login.js', express.static(__dirname + '/frontend/Login/login.js'))
app.use('/login.css', express.static(__dirname + '/frontend/Login/login.css'))
app.use('/_img', express.static(__dirname + '/frontend/_img'))
app.use('/stylelogin.css', express.static(__dirname + '/frontend/css/stylelogin.css'))
app.use('/style.css', express.static(__dirname + '/frontend/css/style.css'))
app.use('/styleMenuBar.css', express.static(__dirname + '/frontend/css/styleMenuBar.css'))
app.use('/_sidebar.scss', express.static(__dirname + '/frontend/css/_sidebar.scss'))
app.use('/style_J.css', express.static(__dirname + '/frontend/css/style_J.css'))
/*

app.use(bodyParser.urlencoded());
/*
app.post('/login',(req,res)=>{
	res.send('User: '+req.body.user+' password: '+req.body.password);
});

*/
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/frontend/pages/index.html');
});

app.get('/login1', (req,res)=>{
    res.sendFile(__dirname + '/frontend/Login/login.html');
});
/*
app.get('/criarConta', (req,res)=>{
    res.sendFile(__dirname + '/frontend/pages/criarConta.html');
});*/

app.get('/colaboradores', (req,res)=>{
    res.sendFile(__dirname + '/frontend/formularios/administracao/form_Colaboradores1.html');
});

app.get('/denunciantes', (req,res)=>{
    res.sendFile(__dirname + '/frontend/formularios/administracao/form_Denunciantes1.html');
});

app.get('/entidades', (req,res)=>{
    res.sendFile(__dirname + '/frontend/formularios/administracao/form_Entidades1.html');
});

app.get('/operacionais', (req,res)=>{
    res.sendFile(__dirname + '/frontend/formularios/administracao/form_Operacionais1.html');
});

app.get('/parceiros', (req,res)=>{
    res.sendFile(__dirname + '/frontend/formularios/administracao/form_Parceiros1.html');
});

//ROTAS PRIVADAS

app.get('/gerirestados', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_GestaoEstados.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/gerirmaterial', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_GestaoMaterial.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/gerirocorrencia', (req,res)=>{
   if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_GestaoOcorrencias.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/geriroperacao', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_GestaoOperacoes.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/gerirdenuncia', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_GestaoDenuncias.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/gerirdashboard', (req,res)=>{
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_GestaoDashboard.html');
});

app.get('/registarocorrencia', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_RegistarOcorrencia.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/registaroperacao', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_RegistarOperacao.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/registardenuncia', (req,res)=>{
    if(req.session.loggedIn){
    res.sendFile(__dirname + '/frontend/formularios/operacoes/form_RegistarDenuncia.html');}
    else{
		res.send('Not allowed to see this page, please login.');
	}
});

app.get('/logout', (req,res)=>{
    res.sendFile(__dirname + '/frontend/pages/index.html');
});

app.post('/auth',function(req,res){
    console.log("HERE")
	var username = req.body.username;
	var password = req.body.password;
	console.log(username+password)
	if(username&&password){
		bd.connection.query('SELECT * FROM users WHERE Username = ? AND Password = ?', [username, password], function(error,results,fields){
			if(results.length>0){
				req.session.loggedIn=true;
				req.session.user=username;
				res.redirect('/home')
			} else{
				res.send('Incorrect username or password!');
			}
			res.end();
		});
	}else{
		res.send('Please enter username and password!');
		res.end();
	}
});

app.post('/sign-up',function(req,res){
    if(req.method=="POST"){
        var post = req.body;
        var name = post.username;
        var pass = post.password;
        var salt = 10;
        
        let hash = bcrypt.hashSync(pass,salt);
        
        var query = bd.connection.query('INSERT INTO users (username, password) VALUES (?, ?)',[name,hash],function(err,result){
            var message = "Your account was successfully created!";
            console.log(hash);
            res.send(message);
        });
    }else{
        res.sendFile('signup');
    }
});

app.post('/logout',function(req, res, err) {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        res.sendFile(__dirname + '/frontend/pages/index.html');
    });
});

app.get('/home', function(req,res){
	console.log(req.session.loggedIn)
	if(req.session.loggedIn){
		res.send('Welcome back '+req.session.user+'!');
	} else{
		res.send('Not allowed to see this page, please login.');
	}
});

/*function isLoggedIn(req, res, next) {
    console.log(req.session)
    if (req.session&&req.session.user) {
        console.log("AUTH")
        return next();
    }
    else {
        console.log("NOT AUTH")
        return next();
    }
}*/


app.listen(port, ()=> console.log('Running at port ' + port));

module.exports = app;
require("./appl");
