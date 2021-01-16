const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
function readColaborator(req, res){
    bd.execSQLQuery('SELECT * FROM Colaborators ORDER BY idColaborator DESC', res);
};

//READ ID:
router.get('/colaborators/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idColaborator=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Colaborators idColaborator ' + filter, res);
});

//DELETE FISICO:
function deleteColaborator(req, res){
    bd.execSQLQuery('DELETE FROM Colaborators WHERE idColaborator=' + parseInt(req.params.id), res);
};

//SAVE:
function addColaborator(req, res){
    const idColaborator = req.body.idColaborator;
    const Name = req.body.Name;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    bd.execSQLQuery(`INSERT INTO Colaborators (idColaborator, Name, Username, Email, Password, Telephone)
    VALUES('${idColaborator}','${Name}','${Username}','${Email}','${Password}','${Telephone}')`, res);
};

//UPDATE:
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
    deleteColaborator: deleteColaborator,
    updateColaborator: updateColaborator,
    addColaborator: addColaborator
}