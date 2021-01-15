//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connectMySql'); //função de leitura que retorna o resultado no callback

function getAll(req, res) {
    let sql = "SELECT idEntity, Door_num, Type FROM Entities order by idEntity desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idEntity, Door_num, Type FROM Entities WHERE idEntity=?";
    global.connection.query(sql, req.params.idEntity, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Entities (Door_num, Type) VALUES (?,?)";
    global.connection.query(sql, [
        req.body.Door_num,
        req.body.Type
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Entities SET Door_num=?, Type=? WHERE idEntity=?"; 
    global.connection.query(sql, [
        req.body.Door_num,
        req.body.Type,
        req.params.idEntity
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Entities WHERE idEntity=?"; 
    global.connection.query(sql, req.params.idEntity, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

/*
function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idEntity, type, door_num FROM Entities order by idEntity desc', function(err, rows, fields) {
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
    const idEntity = req.sanitize('id').escape();
    const post = { idEntity: idEntity };
    const query = connect.con.query('SELECT idEntity, type, door_num FROM Entities where idEntity = ? order by idEntity desc ', post, function(err, rows, fields) {
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
    const door_num = req.sanitize('door_num').escape();
    req.checkBody("type", "Insira apenas texto").matches(/^[a-z ]+$/i);
    //req.checkBody("door_num)", "Insira numero").optional({ checkFalsy: true }).matches(/^[0-100 ]+$/i);
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (type != "NULL" && door_num != "NULL" && typeof(type) != 'undefined') {
            const post = { type: type, door_num: door_num};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Entities SET ?', post, function(err, rows, fields) {
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
    const door_num = req.sanitize('door_num').escape();
    const idEntity = req.sanitize('id').escape();
    req.checkBody("tipo", "Insira apenas texto").optional({ checkFalsy: true }).matches(/^[a-z ]+$/i);
    //req.checkBody("door_num", "Insira um url válido.").optional({ checkFalsy: true }).isNumber();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idEntity != "NULL" && typeof(type) != 'undefined' && typeof(door_num) != 'undefined' && typeof(idEntity) != 'undefined') {
            const update = [type, door_num, idEntity];
            const query = connect.con.query('UPDATE Entities SET type =?, door_num =? WHERE idEntity=?', update, function(err, rows, fields) {
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
    const query = connect.con.query('UPDATE Entities SET active = ? WHERE idEntity=?', update, function(err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Entities WHERE idEntity=?', update, function(err, rows, fields) {
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
