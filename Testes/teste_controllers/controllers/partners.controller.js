//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connectMySQL'); //função de leitura que retorna o resultado no callback


function getAll(req, res) {
    let sql = "SELECT idPartner, Name, Email, Telephone, Address FROM Partners order by idPartner desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idPartner, Name, Email, Telephone, Address FROM Partners WHERE idPartner=?";
    global.connection.query(sql, req.params.idPartner, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Partners (Name, Email, Telephone, Address) VALUES (?,?,?,?)";
    global.connection.query(sql, [
        req.body.Name,
        req.body.Email,
        req.body.Telephone,
        req.body.Address
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Partners SET Name=?, Email=?, Telephone=?, Address=? WHERE idPartner=?"; 
    global.connection.query(sql, [
        req.body.Name,
        req.body.Email,
        req.body.Telephone,
        req.body.Address,
        req.params.idPartner
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Partners WHERE idPartner=?"; 
    global.connection.query(sql, req.params.idPartner, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


/*
function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idPartner, Name, Telephone, Address, active FROM Partners order by IdPartner desc', function(err, rows, fields) {
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

function readID(req, res) {
    //criar e executar a query de leitura na BD para um ID específico
    const idsponsor = req.sanitize('id').escape();
    const post = { idSponsor: idsponsor };
    const query = connect.con.query('SELECT idPartner, Name, Telephone, Address, active FROM Partners where IdPartner = ? order by idPartner desc ', post, function(err, rows, fields) {
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
    //receber os dados do formuário que são enviados por post
    const Name = req.sanitize('Name').escape();
    const Telephone = req.sanitize('Telephone').escape();
    const Address = req.sanitize('Address').escape();
    req.checkBody("Name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("Telephone", "Insira apenas numeros").isNumeric();
    req.checkBody("Address", "Insira apenas texto").matches(/^[a-z ]+$/i);
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (Name != "NULL" && Address != "NULL" && typeof(Name) != 'undefined') {
            const post = { Name: Name, Telephone: Telephone, Address: Address };
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Partners SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                }
                else {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
        }
        else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}
//criar e executar a query de update  na BD
function update(req, res) {
    const Name = req.sanitize('Name').escape();
    const Telephone = req.sanitize('Telephone').escape();
    const Address = req.sanitize('Address').escape();
    const idPartner = req.sanitize('idPartner').escape();
    req.checkBody("Name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("Telephone", "Insira apenas numeros").isNumeric();
    req.checkBody("Address", "Insira apenas texto").matches(/^[a-z ]+$/i);
    
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idPartner != "NULL" && typeof(Name) != 'undefined' && typeof(Address) != 'undefined' && typeof(idPartner) != 'undefined') {
            const update = [Name, Telephone, Address, idPartner];
            const query = connect.con.query('UPDATE Partners SET Name =?, Telephone =?, Address=? WHERE idPartner=?', update, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                }
                else {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
        }
        else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}
//delete lógico
function deleteL(req, res) {
    const update = [0, req.sanitize('idPartner').escape()];
    const query = connect.con.query('UPDATE Partners SET active = ? WHERE idPartner=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
        }
        else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

//delete físico
function deleteF(req, res) {
    const update = req.sanitize('idPartner').escape();
    const query = connect.con.query('DELETE FROM Partners WHERE idPartner=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDeleteU.status).send(jsonMessages.db.successDeleteU);
        }
        else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    deleteL: deleteL,
    deleteF: deleteF,
}
*/

//exportar as funções
module.exports = {
    list: getAll,
    read: getOne,
    create: createOne,
    update: updateOne,
    delete: deleteOne
}