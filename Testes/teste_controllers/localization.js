const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);


//LIST:
router.get('/localization', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Localization ORDER BY idLocalization DESC', res);
});

//READ ID:
router.get('/localization/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idLocalization=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Localization idLocalization ' + filter, res);
});

//DELETE FISICO:
router.delete('/localization/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Localization WHERE idLocalization=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/localization', (req, res) =>{
    const idLocalization = req.body.idLocalization;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    bd.execSQLQuery(`INSERT INTO Localization (idLocalization, Street, District, Zip_Code)
    VALUES('${idLocalization}','${Street}','${District}','${Zip_Code}')`, res);
});

//UPDATE:
router.put('/localization/:id', (req, res) =>{
    const idLocalization = parseInt(req.params.id);
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    bd.execSQLQuery(`UPDATE Localization SET Street='${Street}', District='${District}', Zip_Code='${Zip_Code}' WHERE idLocalization=${idLocalization}`, res);
});