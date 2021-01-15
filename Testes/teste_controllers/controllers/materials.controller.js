//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connectMySQL'); //função de leitura que retorna o resultado no callback


function getAll(req, res) {
    let sql = "SELECT idMaterial, Name, Quantity FROM Materials order by idMaterial desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idMaterial, Name, Quantity FROM Materials WHERE idAccuser=?";
    global.connection.query(sql, req.params.idMaterial, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Materials (Name, Quantity) VALUES (?,?)";
    global.connection.query(sql, [
        req.body.Name,
        req.body.Quantity
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Materials SET Name=?, Quantity=? WHERE idMaterial=?"; 
    global.connection.query(sql, [
        req.body.Name,
        req.body.Quantity, 
        req.params.idMaterial
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Materials WHERE idMaterial=?"; 
    global.connection.query(sql, req.params.idMaterial, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


/*function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idMaterial, Name, Quantity FROM Materials order by idMaterial desc', function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
        else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            }
            else {
                res.send(rows);
            }
        }
    });
}

function save(req, res) {
    //receber os dados do formulário que são enviados por post
    const Name = req.sanitize('Name').escape();
    const Quantity  = req.sanitize('Quantity').escape();
    req.checkBody("Name", "Insira apenas texto").isAlpha();
    req.checkBody("Quantity", "Insira números").isQuantity()
    
    
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (Name != "NULL" && Quantity != "NULL" && typeof(Name) != "undefined") {
            const post = { Name: Name, Quantity: Quantity};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Materials SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                }
                else {
                    console.log(err);
                    res.send(jsonMessages.db.dbError);
                }
            });
        }
        else

            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

//exportar as funções
module.exports = {
    read: read,
    save: save
};
*/

//exportar as funções
module.exports = {
    list: getAll,
    read: getOne,
    create: createOne,
    update: updateOne,
    delete: deleteOne
}