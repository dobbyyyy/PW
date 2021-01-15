const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const port = 5000;
const mysql = require('mysql');
//configure bodyParser for posts
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//routing
const router = express.Router();
router.get('/', (req,res)=>res.json({message: 'Working!'}));
app.use('/', router);
//start server
app.listen(port);
console.log('API!')

function execSQLQuery(sqlQry, res){
	const connection = mysql.createConnection({
	host: 'webitcloud.net',
	port: '3306',
	user: 'webitclo_d41',
	password: '6k[TL3H*dJ(H',
	database: 'webitclo_d41'
	});
	connection.query(sqlQry, function(error, results, fields){
		if(error){
			res.json(error);
		} else{
			res.json(results);
		}
		connection.end();
		console.log('executou!')
	})
}

router.get('/users', (req,res)=>{
	execSQLQuery('SELECT * FROM User', res);
})

router.get('/users/:id?', (req,res)=>{
	let filter='';
	if(req.params.id) filter = ' WHERE idUser='+ parseInt(req.params.id);
	execSQLQuery('SELECT * FROM User '+filter, res);
});

router.delete('/users/:id', (req,res)=>{
	execSQLQuery('DELETE FROM User WHERE idUser=' + parseInt(req.params.id), res);
});

router.patch('users/:id', (req,res)=>{
	const id = parseInt(req.params.id);
	const nome = req.body.name.substring(0,45);
	const password = req.body.password.substring(0,45);
	const tipo = req.body.type.substring(0,45);
	execSQLQuery('UPDATE User Set Name=${nome}, Password=${password}, Type=${tipo}',res)
});