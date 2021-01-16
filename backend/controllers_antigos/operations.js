const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
function readOperation(req, res){
    bd.execSQLQuery('SELECT * FROM Operations ORDER BY idOperation DESC', res);
};

//READ ID:
router.get('/operations/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations idOperation ' + filter, res);
});

//DELETE FISICO:
function deleteOperation(req, res){
    bd.execSQLQuery('DELETE FROM Operations WHERE idOperation=' + parseInt(req.params.id), res);
};


//SAVE:
function addOperation(req, res){
    const idOperation = req.body.idOperation;
    const idOccurrence = req.body.idOccurrence;
    const idOperation_Manager = req.body.idOperation_Manager;
    const Type = req.body.Type;
    const State = req.body.State;
    bd.execSQLQuery(`INSERT INTO Operations (idOperation, idOccurrence, idOperation_Manager, Type, State) 
    VALUES('${idOperation}','${idOccurrence}','${idOperation_Manager}','${Type}','${State}')`, res);
};

//UPDATE:
function updateOperation(req, res){
    const idOperation = parseInt(req.params.id);
    const idOccurrence = req.body.idOccurrence;
    const idOperation_Manager = req.body.idOperation_Manager;
    const Type = req.body.Type;
    const State = req.body.State;
    bd.execSQLQuery(`UPDATE Operations SET idOccurrence='${idOccurrence}', idOperation_Manager='${idOperation_Manager}', Type='${Type}', State='${State}' WHERE idOperation=${idOperation}`, res);
};

/*
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
    const idOperation = parseInt(req.params.id);
    const idOperational = req.body.idOperational;
    bd.execSQLQuery(`UPDATE Operation_Operational SET idOperational='${idOperational}' WHERE idOperation=${idOperation}`, res);
});
*/

module.exports = {
    readOperation: readOperation,
    deleteOperation: deleteOperation,
    updateOperation: updateOperation,
    addOperation: addOperation
}