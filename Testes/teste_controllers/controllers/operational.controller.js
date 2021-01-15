//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connectMySQL');


function getAll(req, res) {
    let sql = "SELECT idOperational, Name, Email, Address, Telephone, Type FROM Operational order by idOperational desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idOperational, Name, Email, Address, Telephone, Type FROM Operational WHERE idOperational=?";
    global.connection.query(sql, req.params.idOperational, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Operational (Name, Email, Address, Telephone, Type) VALUES (?,?,?,?,?)";
    global.connection.query(sql, [
        req.body.Name,
        req.body.Email,
        req.body.Address,
        req.body.Telephone,
        req.body.Type
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Operational SET Name=?, Email=?, Address=?, Telephone=?, Type=? WHERE idOperational=?"; 
    global.connection.query(sql, [
        req.body.Name,
        req.body.Email,
        req.body.Address,
        req.body.Telephone,
        req.body.Type, 
        req.params.idOperational
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Operational WHERE idOperational=?"; 
    global.connection.query(sql, req.params.idOperational, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


/*
function read(req, res) {
    connect.con.query('SELECT idOperational, Name, Telephone, Type, active FROM Operational order by idOperational desc', function(err, rows, fields) {
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
    const idspeaker = req.sanitize('idOperational').escape();
    const post = { idSponsor: idspeaker };
    connect.con.query('SELECT idOperational, Name, Telephone, Type FROM Operational where idOperational = ? order by idOperational desc', post, function(err, rows, fields) {
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
    const Name = req.sanitize('Name').escape();
    const Telephone = req.sanitize('Telephone').escape();
    const Type = req.sanitize('Type').escape();
    req.checkBody("Name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("Telephone", "Insira apenas numeros").isNumeric();
    req.checkBody("Type", "Insira apenas texto").matches(/^[a-z ]+$/i);
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (Name != "NULL" && Telephone != "NULL" && typeof(nome) != "undefined") {
            const post = { Name: Name, Telephone: Telephone, Type: Type };
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Operational SET ?', post, function(err, rows, fields) {
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
            res.status(jsonMessages.db.requiredData.status).end(jsonMessages.db.requiredData);
    }
}

function update(req, res) {
    const Name = req.sanitize('Name').escape();
    const Telephone = req.sanitize('Telephone').escape();
    const Type = req.sanitize('Type').escape();
    const idOperational = req.sanitize('idOperational').escape();
    req.checkBody("Name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkParams("Telephone", "Insira apenas numeros").isNumeric();
    req.checkBody("Type", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkParams("idOperational", "Insira um ID do Operational válido").isNumeric();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idOperational != "NULL" && typeof(Name) != 'undefined' && typeof(Type) != 'undefined' && typeof(idOperational) != 'undefined') {
            const update = [Name, Telephone, Type, idOperational];
            const query = connect.con.query('UPDATE Operational SET Name =?, Telephone =?, Type=?  WHERE idOperational=?', update, function(err, rows, fields) {
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

function deleteL(req, res) {
    const update = [0, req.sanitize('idOperational').escape()];
    const query = connect.con.query('UPDATE Operational SET active = ? WHERE idOperational=?', update, function(err, rows, fields) {
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

function deleteF(req, res) {
    const update = req.sanitize('idOperational').escape();
    const query = connect.con.query('DELETE FROM Operational WHERE idOperational=?', update, function(err, rows, fields) {
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
