const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'webitcloud.net',
    user: 'webitclo_d41',
    password: '6k[TL3H*dJ(H',
    database: 'webitclo_d41'
  });

function execSQLQuery(sqlQry, res){
  
  connection.query(sqlQry, function(error, results, fields){
      if(error){
          console.error(error);
          res.status(500).end();
      }
        //res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
});
}

module.exports={
  execSQLQuery: execSQLQuery,
  connection: connection
}

console.log('executou!');


///BD BACK: Users/miguelmarques/dumps/Dump20201218.sql 