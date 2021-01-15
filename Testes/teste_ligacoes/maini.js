const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST;
var cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors({
  exposedHeaders: ['Location'],
}));

//const port = process.env.port || 8080

//const router = require('express').Router();
//module.exports=router

//Abrir o HTML...
app.use(express.static('/frontend'));
app.use('/styleindex.css', express.static(__dirname + '/frontend/styleindex.css'))
app.use('/app.js', express.static(__dirname + '/frontend/app.js'))
app.use('/_img', express.static(__dirname + '/frontend/_img'))
app.use('/stylelogin.css', express.static(__dirname + '/frontend/Projeto/stylelogin.css'))
app.use('/style.css', express.static(__dirname + '/frontend/Projeto/style.css'))
app.use(bodyParser.urlencoded());
/*

app.use(bodyParser.urlencoded());
/*
app.post('/login',(req,res)=>{
	res.send('User: '+req.body.user+' password: '+req.body.password);
});

app.get('/',(req,res)=>{
	res.sendFile('page.html',{root: path.join(__dirname,'public')})
});
*/
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/frontend/Projeto/newlogin.html');
});

app.get('/criarConta', (req,res)=>{
    res.sendFile(__dirname + '/frontend/Projeto/criarConta.html');
});

app.get('/registarPedido', (req,res)=>{
    res.sendFile(__dirname + '/frontend/Projeto/registarPedido.html');
});


app.listen(port, ()=> console.log('Running at port ' + port));


module.exports = app;

require("./appli");
