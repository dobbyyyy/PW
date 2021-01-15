//const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
//const jsonMessages = require(jsonMessagesPath + "bd");


function getAll(req, res) {
    let sql = "SELECT idLocalization, Street, District, Country, Zip_Code FROM Localization order by idLocalization desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idLocalization, Street, District, Country, Zip_Code FROM Localization WHERE idLocalization=?";
    global.connection.query(sql, req.params.idLocalization, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Localization (Street, District, Country, Zip_Code) VALUES (?,?,?,?)";
    global.connection.query(sql, [
        req.body.Street,
        req.body.District,
        req.body.Country,
        req.body.Zip_Code
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Localization SET Street=?, District=?, Country=?, Zip_Code=? WHERE idLocalization=?"; 
    global.connection.query(sql, [
        req.body.Street,
        req.body.District,
        req.body.Country,
        req.body.Zip_Code,
        req.params.idLocalization
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Localization WHERE idLocalization=?"; 
    global.connection.query(sql, req.params.idLocalization, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

/*
const connect = require('../config/connect'); //função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    const query = connect.con.query('SELECT idLocalization, type FROM Localization order by idLocalization desc', function(err, rows, fields) {
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
    const idOperation = req.sanitize('id').escape();
    const post = { idOperation: idOperation };
    const query = connect.con.query('SELECT idLocalization, type FROM Localization where idLocalization = ? order by idLocalization desc ', post, function(err, rows, fields) {
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
    const Street = req.sanitize('Street').escape();
    const District = req.sanitize('District').escape();
    const Country = req.sanitize('Country').escape();
    const Zip_Code = req.sanitize('Zip_Code').escape();
    req.checkBody("Street", "Insira Uma Morada válida").isStreet();
    req.checkBody("District", "Insira um distrito válido").isDistrct();
    req.checkBody("Country", "Insira um país válido").isCountry();
    req.checkBody("Zip_Code", "Insira o Código Postal").isZip_Code();
    

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idLocalization != "NULL") {
            const post = {type: type};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = connect.con.query('INSERT INTO Localization SET ?', post, function(err, rows, fields) {
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
    const Street = req.sanitize('Street').escape();
    const District = req.sanitize('District').escape();
    const Country = req.sanitize('Country').escape();
    const Zip_Code = req.sanitize('Zip_Code').escape();
    req.checkBody("Street", "Insira Uma Morada válida").isStreet();
    req.checkBody("District", "Insira um distrito válido").isDistrct();
    req.checkBody("Country", "Insira um país válido").isCountry();
    req.checkBody("Zip_Code", "Insira o Código Postal").isZip_Code();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (idLocalization != "NULL" && typeof(idLocalization) != 'undefined') {
            const update = [type, idOperation];
            const query = connect.con.query('UPDATE Localization SET Street =?, District =?, Country =?, Zip_Code =? WHERE idLocalization=?', update, function(err, rows, fields) {
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
    const query = connect.con.query('UPDATE Localization SET active = ? WHERE idLocalization=?', update, function(err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Localization WHERE idLocalization=?', update, function(err, rows, fields) {
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