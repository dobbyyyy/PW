const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);

//LIST:
function readAccuser(req, res){
    let sql = "SELECT * FROM Accusers ORDER BY idAccuser DESC";
    bd.connection.query(sql, function(err, results) {
    if (err) {
            console.log(err);
            return res.status(500).json(err);
        }    
        res.json(results)
    });
};


//READ ID:
/*router.get('/accusers/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idAccuser=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Accusers idAccuser ' + filter, res);
});*/

function readAccuserId(req, res){
    let sql = "SELECT * FROM Accusers WHERE idAccuser=?"
    bd.connection.query(sql, req.params.idAccuser, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
    
}

//DELETE FISICO:
function deleteAccuser(req, res){
    let sql = "DELETE FROM Accusers WHERE idAccuser=?";
    bd.connection.query(sql, req.params.idAccuser, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
};


//SAVE:
function addAccuser(req, res){
    let sql = "INSERT INTO Accusers (idAccuser, Name, Username, Email, Password, Address, Telephone) VALUES (?,?,?,?,?,?,?)";
    bd.connection.query(sql, [
        req.body.idAccuser,
        req.body.Username,
        req.body.Name,
        req.body.Email,
        req.body.Password,
        req.body.Address,
        req.body.Telephone
        ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}

//UPDATE:
function updateAccuser(req, res){
    let sql = "UPDATE Accusers SET Name=?, Username=?, Email=?, Password=?, Address=?, Telephone=? WHERE idAccuser=?";
    bd.connection.query(sql, [
        req.body.Name,
        req.body.Username,
        req.body.Email, 
        req.body.Password,
        req.body.Address,
        req.body.Telephone,
        req.params.idAccuser
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
};

module.exports = {
    readAccuser: readAccuser,
    readAccuserId: readAccuserId,
    deleteAccuser: deleteAccuser,
    updateAccuser: updateAccuser,
    addAccuser: addAccuser
}