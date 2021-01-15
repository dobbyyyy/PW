const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//ROTA CRUZADA (Operation_Operational):
//POST:
app.post('/operations/:idOperation/operationals/:idOperational', (req, res) =>{
    const idOperation = parseInt(req.params.idOperation)
    const idOperational = parseInt(req.params.idOperational)
    //const params = [idOperation,idOperational];
    bd.execSQLQuery(`INSERT INTO Operation_Operational (idOperation, idOperational)
    VALUES('${idOperation}','${idOperational}')`, res);
    });
    

//LIST:
router.get('/operations/operationals/', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operation_Operational WHERE idOperation =' +parseInt(req.params.idOperation), res);
});

//LIST TODOS:
router.get('/operations/:idOperation/operationals/', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operation_Operational ORDER BY idOperation DESC', res);
});

//DELETE:
router.delete('/operations/:idOperation/operationals/:idOperational', (req, res) =>{
    const idOperation = parseInt(req.params.idOperation)
    const idOperational = parseInt(req.params.idOperational)
    bd.execSQLQuery('DELETE FROM Operation_Operational WHERE idOperational=' + parseInt(req.params.idOperational) ,res);
}); 

//UPDATE:
router.put('/operations/:idOperation/operationals/', (req, res) =>{
    const idOperation = parseInt(req.params.idOperation);
    const idOperational = req.body.idOperational;
    console.log(req.body.idOperational);
    bd.execSQLQuery(`UPDATE Operation_Operational SET idOperational='${idOperational}' WHERE idOperation=`+parseInt(req.params.idOperation), res);
});
