//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connect'); //função de leitura que retorna o resultado no callback



function getAll(req, res) {
    let sql = "SELECT idOccurrence, Description, State FROM Occurrences order by idOccurrence desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idOccurrence, Description, State FROM Occurrences WHERE idOccurrence=?";
    global.connection.query(sql, req.params.idOccurrence, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Occurrences (Description, State) VALUES (?,?)";
    global.connection.query(sql, [
        req.body.Description,
        req.body.State
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Occurrences SET Description=?, State=? WHERE idOccurrence=?"; 
    global.connection.query(sql, [
        req.body.Description,
        req.body.State, 
        req.params.idOccurrence
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Occurrences WHERE idOccurrence=?"; 
    global.connection.query(sql, req.params.idOccurrence, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


/*
function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idOcurrence, description, state FROM Ocurrences order by idOcurrence desc', function(err, rows, fields) {
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
    const idOcurrence = req.sanitize('id').escape();
    const post = { idOcurrence: idOcurrence };
    const query = connect.con.query('SELECT idOcurrence, description, state FROM Ocurrences where idOcurrence = ? order by idOcurrence desc ', post, function(err, rows, fields) {
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
    const description = req.sanitize('description').escape();
    const state = req.sanitize('state').escape();
    req.checkBody("description", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("state", "Insira apenas texto").optional({ checkFalsy: true }).matches(/^[a-z ]+$/i);
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (description != "NULL" && state != "NULL" && typeof(description) != 'undefined') {
            const post = { description: description, state: state};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Ocurrences SET ?', post, function(err, rows, fields) {
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
    const description = req.sanitize('description').escape();
    const state = req.sanitize('state').escape();
    const idOcurrence = req.sanitize('id').escape();
    req.checkBody("description", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("state", "Insira apenas texto").optional({ checkFalsy: true }).matches(/^[a-z ]+$/i);
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idOcurrence != "NULL" && typeof(description) != 'undefined' && typeof(state) != 'undefined' && typeof(idOcurrence) != 'undefined') {
            const update = [description, state, idOcurrence];
            const query = connect.con.query('UPDATE Ocurrences SET description =?, state =? WHERE idOcurrence=?', update, function(err, rows, fields) {
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
    const update = [0, req.sanitize('id').escape()];
    const query = connect.con.query('UPDATE Ocurrences SET active = ? WHERE idOcurrence=?', update, function(err, rows, fields) {
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
    const update = req.sanitize('id').escape();
    const query = connect.con.query('DELETE FROM Ocurrences WHERE idOcurrence=?', update, function(err, rows, fields) {
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