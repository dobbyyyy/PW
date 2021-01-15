//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connectMySql'); //função de leitura que retorna o resultado no callback


function getAll(req, res) {
    let sql = "SELECT idRequest, Type, State FROM Request order by idRequest desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idRequest, Type, State FROM Request WHERE idRequest=?";
    global.connection.query(sql, req.params.idRequest, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Request (Type, State) VALUES (?,?)";
    global.connection.query(sql, [
        req.body.Type,
        req.body.State
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Request SET Type=?, State=? WHERE idRequest=?"; 
    global.connection.query(sql, [
        req.body.Type,
        req.body.State, 
        req.params.idRequest
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Request WHERE idRequest=?"; 
    global.connection.query(sql, req.params.idRequest, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

/*
function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idRequest, type, state FROM Request order by idRequest desc', function(err, rows, fields) {
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
    const idRequest = req.sanitize('id').escape();
    const post = { idRequest: idRequest };
    const query = connect.con.query('SELECT idRequest, type, state FROM Request where idRequest = ? order by idRequest desc ', post, function(err, rows, fields) {
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
    const type = req.sanitize('type').escape();
    const state = req.sanitize('state').escape();
    req.checkBody("type", "Insira apenas texto").matches(/^[a-z ]+$/i);
    //req.checkBody("door_num)", "Insira numero").optional({ checkFalsy: true }).matches(/^[0-100 ]+$/i);
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (type != "NULL" && state != "NULL" && typeof(type) != 'undefined') {
            const post = { type: type, state: state};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Request SET ?', post, function(err, rows, fields) {
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
    const type = req.sanitize('type').escape();
    const state = req.sanitize('state').escape();
    const idRequest = req.sanitize('id').escape();
    //req.checkBody("name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("type", "Insira apenas texto").optional({ checkFalsy: true }).matches(/^[a-z ]+$/i);
    //req.checkBody("door_num", "Insira um url válido.").optional({ checkFalsy: true }).isNumber();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idRequest != "NULL" && typeof(type) != 'undefined' && typeof(state) != 'undefined' && typeof(idRequest) != 'undefined') {
            const update = [type, state, idRequest];
            const query = connect.con.query('UPDATE Request SET type =?, state =? WHERE idRequest=?', update, function(err, rows, fields) {
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
    const query = connect.con.query('UPDATE Request SET active = ? WHERE idRequest=?', update, function(err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Request WHERE idRequest=?', update, function(err, rows, fields) {
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