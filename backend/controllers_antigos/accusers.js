const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);

//LIST:
function readAccuser(req, res){
    bd.execSQLQuery('SELECT * FROM Accusers ORDER BY idAccuser DESC', res);
};

//READ ID:
router.get('/accusers/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idAccuser=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Accusers idAccuser ' + filter, res);
});

//DELETE FISICO:
function deleteAccuser(req, res){
    bd.execSQLQuery('DELETE FROM Accusers WHERE idAccuser=' + parseInt(req.params.id), res);
};

//SAVE:
function addAccuser(req, res){
    console.log(req.body.Name)
    const idAccuser = req.body.idAccuser;
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Address;
    const Telephone = req.body.Telephone;
    bd.execSQLQuery(`INSERT INTO Accusers (idAccuser, Name, Username, Email, Password, Address, Telephone) 
    VALUES('${idAccuser}','${Name}','${Username}','${Email}','${Password}','${Address}','${Telephone}')`, res);
};


//UPDATE:
function updateAccuser(req, res){
    const idAccuser = parseInt(req.params.id);
    const Name = req.body.Name;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Address;   
    const Telephone = req.body.Telephone;
    bd.execSQLQuery(`UPDATE Accusers SET Name='${Name}', Username='${Username}', Email='${Email}', Password='${Password}', Address='${Address}', Telephone='${Telephone}' WHERE idAccuser=${idAccuser}`, res);
};

module.exports = {
    readAccuser: readAccuser,
    deleteAccuser: deleteAccuser,
    updateAccuser: updateAccuser,
    addAccuser: addAccuser
}