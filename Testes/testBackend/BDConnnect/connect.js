async function connect(){
	console.log("Connecting..");
	if(global.connection && global.connection.state !== 'disconnected')
	 return global.connection;

const mysql = require('mysql/promise')
const connection = await mysql.createConnection("mysql://webitclo_d41:6k[TL3H*dJ(H@webitcloud.net:3306");
console.log("Connection to MySQL done!");
global.connection=connection;
return connection;
}
