const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/tipo_ocorrencia', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Occurrences_Type ORDER BY idOccurrence_Type DESC', res);
});

//READ ID:
router.get('/tipo_ocorrencia/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOccurrence_Type=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Occurrences_Type idOccurrence_Type ' + filter, res);
});

//DELETE FISICO:
router.delete('/tipo_ocorrencia/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Occurrences_Type WHERE idOccurrence_Type=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/tipo_ocorrencia', (req, res) =>{
    const idOccurrence_Type = req.body.idOccurrence_Type;
    bd.execSQLQuery(`INSERT INTO Occurrences_Type (idOccurrence_Type)
    VALUES('${idOccurrence_Type}')`, res);
});

//UPDATE:
router.patch('/tipo_ocorrencia/:id', (req, res) =>{
    const idOccurrence_Type = parseInt(req.params.id);
    bd.execSQLQuery(`UPDATE Occurrences_Type SET WHERE idOccurrence_Type=${idOccurrence_Type}`, res);
});