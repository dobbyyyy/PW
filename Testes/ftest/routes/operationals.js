const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/operacional', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operational ORDER BY idOperational DESC', res);
});

//READ ID:
router.get('/operacional/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperational=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operational idOperational ' + filter, res);
});

//DELETE FISICO:
router.delete('/operacional/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Operational WHERE idOperational=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/operacional', (req, res) =>{
    const idOperational = req.body.idOperational;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
    bd.execSQLQuery(`INSERT INTO Operational (idOperational, Name, Email, Telephone, Type)
    VALUES('${idOperational}','${Name}','${Email}','${Telephone}','${Type}')`, res);
});

//UPDATE:
router.patch('/operacional/:id', (req, res) =>{
    const idOperational = parseInt(req.params.id);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
    bd.execSQLQuery(`UPDATE Operational SET Name='${Name}', Email='${Email}', Telephone='${Telephone}', Type='${Type}'WHERE idOperational=${idOperational}`, res);
});