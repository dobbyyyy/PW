const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host: 'webitcloud.net',
    user: 'webitclo_d41',
    password: '6k[TL3H*dJ(H',
    database: 'webitclo_d41'
  });
 
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
  execSQLQuery: execSQLQuery
}

console.log('executou!');