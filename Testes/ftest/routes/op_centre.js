const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/centro_operacoes', (req, res) =>{
    bd.xecSQLQuery('SELECT * FROM Operations_Center ORDER BY idOperation_Center DESC', res);
});

//READ ID:
router.get('/centro_operacoes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation_Manager=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations_Center idOperation_Center ' + filter, res);
});

//DELETE FISICO:
router.delete('/centro_operacoes/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Operations_Center WHERE idOperation_Center=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/centro_operacoes', (req, res) =>{
    const idOperation_Manager = req.body.idOperation_Manager;
    bd.execSQLQuery(`INSERT INTO Operations_Center (idOperation_Center)
    VALUES('${idOperation_Manager}')`, res);
});

//UPDATE:
router.patch('/centro_operacoes/:id', (req, res) =>{
    const idOperation_Center = parseInt(req.params.id);
    bd.execSQLQuery(`UPDATE Operations_Center SET WHERE idOperation_Manager=${idOperation_Center}`, res);
});