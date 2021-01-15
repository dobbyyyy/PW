const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/denunciantes', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Accusers ORDER BY idAccuser DESC', res);
});

//READ ID:
router.get('/denunciantes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idAccuser=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Accusers idAccuser ' + filter, res);
});

//DELETE FISICO:
router.delete('/denunciantes/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Accusers WHERE idAccuser=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/denunciantes', (req, res) =>{
    const idAccuser = req.body.idAccuser;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Address;
    const Telephone = req.body.Telephone;
    bd.execSQLQuery(`INSERT INTO Accusers (idAccuser, Name, Email, Password, Address, Telephone)
    VALUES('${idAccuser}','${Name}','${Email}','${Password}','${Address}','${Telephone}')`, res);
});

//UPDATE:
router.patch('/denunciantes/:id', (req, res) =>{
    const idAccuser = parseInt(req.params.id);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Add;   
    const Telephone = req.body.Telephone;
    bd.execSQLQuery(`UPDATE Accusers SET Name='${Name}', Email='${Email}', Password='${Password}', Address='${Address}', Telephone='${Telephone}' WHERE idAccuser=${idAccuser}`, res);
});