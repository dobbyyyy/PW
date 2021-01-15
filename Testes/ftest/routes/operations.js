const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/operacoes', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operations ORDER BY idOperation DESC', res);
});

//READ ID:
router.get('/operacoes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations idOperation ' + filter, res);
});

//DELETE FISICO:
router.delete('/operacoes/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Operations WHERE idOperation=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/operacoes', (req, res) =>{
    const idOperation = req.body.idOperation;
    const Type = req.body.Type;
    bd.execSQLQuery(`INSERT INTO Operations (idOperation, Type)
    VALUES('${idOperation}','${Type}')`, res);
});

//UPDATE:
router.patch('/operacoes/:id', (req, res) =>{
    const idOperation = parseInt(req.params.id);
    const Type = req.body.Type;
    bd.execSQLQuery(`UPDATE Operations SET Type='${Type}' WHERE idOperation=${idOperation}`, res);
});