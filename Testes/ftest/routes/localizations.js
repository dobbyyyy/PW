const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/localizacao', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Localization ORDER BY idLocalization DESC', res);
});

//READ ID:
router.get('/localizacao/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idLocalization=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Localization idLocalization ' + filter, res);
});

//DELETE FISICO:
router.delete('/localizacao/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Localization WHERE idLocalization=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/localizacao', (req, res) =>{
    const idLocalization = req.body.idLocalization;
    const Street = req.body.Street;
    const District = req.body.District;
    const Country = req.body.Country;
    const Zip_Code = req.body.Zip_Code;
    bd.execSQLQuery(`INSERT INTO Localization (idLocalization, Street, District, Country, Zip_Code)
    VALUES('${idLocalization}','${Street}','${District}','${Country}','${Zip_Code}')`, res);
});

//UPDATE:
router.patch('/localizacao/:id', (req, res) =>{
    const idLocalization = parseInt(req.params.id);
    const Street = req.body.Street;
    const District = req.body.District;
    const Country = req.body.Country;
    const Zip_Code = req.body.Zip_Code;
    bd.execSQLQuery(`UPDATE Localization SET Street='${Street}', District='${District}', Country='${Country}', Zip_Code='${Zip_Code}' WHERE idLocalization=${idLocalization}`, res);
});