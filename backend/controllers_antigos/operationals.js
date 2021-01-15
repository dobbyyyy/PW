const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);

//LIST:
function readOperational(req, res){
    bd.execSQLQuery('SELECT * FROM Operational ORDER BY idOperational DESC', res);
};

//READ ID:
router.get('/operationals/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperational=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operational idOperational ' + filter, res);
});

//DELETE FISICO:
function deleteOperational(req, res){
    bd.execSQLQuery('DELETE FROM Operational WHERE idOperational=' + parseInt(req.params.id), res);
};


//SAVE:
function addOperational(req, res){
    const idOperational = req.body.idOperational;
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
    bd.execSQLQuery(`INSERT INTO Operational (idOperational, Username, Name, Email, Password, Telephone, Type)
    VALUES('${idOperational}','${Username}','${Name}','${Email}','${Password}','${Telephone}','${Type}')`, res);
};

//UPDATE:
function updateOperational(req, res){
    const idOperational = parseInt(req.params.id);
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
    bd.execSQLQuery(`UPDATE Operational SET Username='${Username}', Name='${Name}', Email='${Email}', Password='${Password}', Telephone='${Telephone}', Type='${Type}'WHERE idOperational=${idOperational}`, res);
};

module.exports = {
    readOperational: readOperational,
    deleteOperational: deleteOperational,
    updateOperational: updateOperational,
    addOperational: addOperational
}