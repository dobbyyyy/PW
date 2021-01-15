//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");
//const connect = require('../config/connectMySQL'); //função de leitura que retorna o resultado no callback

function getAll(req, res) {
    let sql = "SELECT idColaborator, Name, Email, Password, Telephone FROM Colaborator order by idColaborator desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idColaborator, Name, Email, Password, Telephone FROM Colaborator WHERE idColaborator=?";
    global.connection.query(sql, req.params.idColaborator, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Colaborator (Name, Email, Password, Telephone) VALUES (?,?,?,?)";
    global.connection.query(sql, [
        req.body.Name,
        req.body.Email,
        req.body.Password,
        req.body.Telephone
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Colaborator SET Name=?, Email=?, Password=?, Telephone=? WHERE idColaborator=?"; 
    global.connection.query(sql, [
        req.body.Name,
        req.body.Email,
        req.body.Password,
        req.body.Telephone,
        req.params.idColaborator
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Colaborator WHERE idColaborator=?"; 
    global.connection.query(sql, req.params.idColaborator, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

/*
function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idColaborator, Name, Email, Password, Telephone, active FROM Colaborator order by IdColaborator desc', function(err, rows, fields) {
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
    const query = connect.con.query('SELECT idColaborator, Name, Email, Password, Telephone, active FROM Colaborators where IdColaborator = ? order by idColaborator desc ', post, function(err, rows, fields) {
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
    const Email = req.sanitize('Email').escape();
    const Address = req.sanitize('Address').escape();
    const Telephone = req.sanitize('Telephone').escape();
    const Password = req.sanitize('Password').escape();
    req.checkBody("Name", "Insira apenas texto").isAlpha();
    req.checkBody("Email", "Insira um email válido").isEmail();
    req.checkBody("Address", "Insira uma direção válida").isAddress();
    req.checkBody("Telephone", "Insira Telephone").isTelephone();
    req.checkBody("Password", "Insira Password").isPassword();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (Name != "NULL" && Address != "NULL" && typeof(Name) != 'undefined') {
            const post = { Name: Name, Email: Email, Address: Address,  };
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Colaborators SET ?', post, function(err, rows, fields) {
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
    const Email = req.sanitize('Email').escape();
    const Address = req.sanitize('Address').escape();
    const Telephone = req.sanitize('Telephone').escape();
    const Password = req.sanitize('Password').escape();
    req.checkBody("Name", "Insira apenas texto").isAlpha();
    req.checkBody("Email", "Insira um email válido").isEmail();
    req.checkBody("Address", "Insira uma direção válida").isAddress();
    req.checkBody("Telephone", "Insira Telephone").isTelephone();
    req.checkBody("Password", "Insira Password").isPassword();
    
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idColaborator != "NULL" && typeof(Name) != 'undefined' && typeof(Address) != 'undefined' && typeof(idColaborator) != 'undefined') {
            const update = [Name, Email, Password, Telephone, idColaborator];
            const query = connect.con.query('UPDATE Colaborators SET Name =?, Email =?, Address=?, Telephone =?, Password =? WHERE idColaborator=?', update, function(err, rows, fields) {
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
    const update = [0, req.sanitize('idColaborator').escape()];
    const query = connect.con.query('UPDATE Colaborators SET active = ? WHERE idColaborator=?', update, function(err, rows, fields) {
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
    const update = req.sanitize('idColaborator').escape();
    const query = connect.con.query('DELETE FROM Colaborators WHERE idColaborator=?', update, function(err, rows, fields) {
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
