const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
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
    const Type = req.body.Type;
    const idOccurrence = req.body.idOccurrence;
    const idOperation_Manager = req.body.idOperation_Manager;
    const idMaterial_Operation = req.body.idMaterial_Operation;
    const idRequest = req.body.idRequest;
    const idAccuser = req.body.idAccuser;
    const idColaborator = req.body.idColaborator;
    const idEntity = req.body.idEntity;
    const idPartner = req.body.idPartner;
    bd.execSQLQuery(`INSERT INTO Operations (idOperation, Type, idOccurrence, idOperation_Manager, idMaterial_Operation, idRequest, idAccuser, idColaborator, idEntity, idPartner) 
    VALUES('${idOperation}','${Type}','${idOccurrence}','${idOperation_Manager}','${idMaterial_Operation}','${idRequest}','${idAccuser}','${idColaborator}','${idEntity}','${idPartner}')`, res);
};

//UPDATE:
function updateOperation(req, res){
    const idOperation = parseInt(req.params.id);
    const Type = req.body.Type;
    const idOccurrence = req.body.idOccurrence;
    const idOperation_Manager = req.body.idOperation_Manager;
    const idMaterial_Operation = req.body.idMaterial_Operation;
    const idRequest = req.body.idRequest;
    const idAccuser = req.body.idAccuser;
    const idColaborator = req.body.idColaborator;
    const idEntity = req.body.idEntity;
    const idPartner = req.body.idPartner;
    bd.execSQLQuery(`UPDATE Operations SET Type='${Type}', idOccurrence='${idOccurrence}', idOperation_Manager='${idOperation_Manager}', idMaterial_Operation='${idMaterial_Operation}', idRequest='${idRequest}', idAccuser='${idAccuser}', idColaborator='${idColaborator}', idEntity='${idEntity}', idPartner='${idPartner}' WHERE idOperation=${idOperation}`, res);
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