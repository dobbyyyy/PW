const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
function readColaborator(req, res){
    let sql = "SELECT * FROM Colaborators ORDER BY idColaborator DESC";
    bd.connection.query(sql, function(err, results) {
    if (err) {
            console.log(err);
            return res.status(500).json(err);
        }    
        res.json(results)
    });
};


//READ ID:
router.get('/colaborators/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idColaborator=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Colaborators idColaborator ' + filter, res);
});

function readColaboratorId(req, res){
    let sql = "SELECT * FROM Colaborators idColaborator=?"
    bd.connection.query(sql, req.params.idAccuser, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
    
}

//DELETE:
/*function deleteColaborator(req, res){
    let sql = "DELETE FROM Colaborators WHERE idColaborator=?";
    global.connection.query(sql, req.params.idColaborator, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
};*/

function deleteColaborator(req, res){
    bd.execSQLQuery('DELETE FROM Colaborators WHERE idColaborator=' + parseInt(req.params.id), res);
};

//SAVE:
function addColaborator(req, res){
    let sql = "INSERT INTO Colaborators (idColaborator, Name, Username, Email, Password, Telephone) VALUES (?,?,?,?,?,?)";
    bd.connection.query(sql, [
        req.body.idColaborator,
        req.body.Name,
        req.body.Username,
        req.body.Email,
        req.body.Password,
        req.body.Telephone
        ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}

//UPDATE:
/*function updateColaborator(req, res){
    let sql = "UPDATE Colaborators SET Name=?, Username=?, Email=?, Password=?, Telephone=? WHERE idColaborator=?";
    bd.connection.query(sql, [
        req.body.Name,
        req.body.Username,
        req.body.Email, 
        req.body.Password,
        req.body.Telephone,
        req.params.idColaborator
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
};*/

function updateColaborator(req, res){
    const idColaborator = parseInt(req.params.id);
    const Name = req.body.Name;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    bd.execSQLQuery(`UPDATE Colaborators SET Name='${Name}', Username='${Username}', Email='${Email}', Password='${Password}', Telephone='${Telephone}' WHERE idColaborator=${idColaborator}`, res);
};

module.exports = {
    readColaborator: readColaborator,
    readColaboratorId: readColaboratorId,
    deleteColaborator: deleteColaborator,
    updateColaborator: updateColaborator,
    addColaborator: addColaborator
}