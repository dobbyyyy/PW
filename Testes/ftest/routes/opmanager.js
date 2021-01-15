const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/gerir_operacoes', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operations_Manager ORDER BY idOperation_Manager DESC', res);
});

//READ ID:
router.get('/gerir_operacoes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation_Manager=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations_Manager idOperation_Manager ' + filter, res);
});

//DELETE FISICO:
router.delete('/gerir_operacoes/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Operations_Manager WHERE idOperation_Manager=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/gerir_operacoes', (req, res) =>{
    const idOperation_Manager = req.body.idOperation_Manager;
    const Name = req.body.Name;
    const Password = req.body.Password;
    bd.execSQLQuery(`INSERT INTO Operations_Manager (idOperation_Manager, Name, Password)
    VALUES('${idOperation_Manager}','${Name}','${Password}')`, res);
});

//UPDATE:
router.patch('/gerir_operacoes/:id', (req, res) =>{
    const idOperation_Manager = parseInt(req.params.id);
    const Name = req.body.Name;
    const Password = req.body.Password;
    bd.execSQLQuery(`UPDATE Operations_Manager SET Name='${Name}', Password='${Password}' WHERE idOperation_Manager=${idOperation_Manager}`, res);
});