const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'webitcloud.net',
	port: '3306',
	user: 'webitclo_d41',
	password: '6k[TL3H*dJ(H',
	database: 'webitclo_d41'
});

connection.connect(function(err){
	if(err) return console.log(err);
	console.log('Conectou!');
	addRows(connection);
});

function addRows(conn){
	const sql = "INSERT INTO User(IdUser,Name,Password,Type) VALUES ?";
	const values = [
	['1','Ricardo','123','utilizador'],
	['2','Jorge','124','utilizador'],
	];
	conn.query(sql, [values], function(error,results,fields){
		if(error) return console.log(error);
		console.log('registos adicionados!');
		conn.end(); //close connection
	});
}
