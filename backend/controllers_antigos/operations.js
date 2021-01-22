const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
function readOperation(req, res){
    let sql = "SELECT * FROM Colaborators ORDER BY idOperation DESC";
    bd.connection.query(sql, function(err, results) {
    if (err) {
            console.log(err);
            return res.status(500).json(err);
        }    
        res.json(results)
    });
}

//READ ID:
router.get('/operations/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations idOperation ' + filter, res);
});

function readOperationByState(req,res){
    let filter = '';
    if(req.params.State) filter = ' WHERE State=' + req.params.State;
    bd.execSQLQuery('SELECT * FROM Operations State ' + filter, res);
}

//DELETE FISICO:
function deleteOperation(req, res){
    bd.execSQLQuery('DELETE FROM Operations WHERE idOperation=' + parseInt(req.params.id), res);
};
function deleteOperation(req, res){
    let sql = "DELETE FROM Colaborators WHERE idOperation=?";
    global.connection.query(sql, req.params.idColaborator, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
};

//SAVE:
function addOperation(req, res){
    let sql = "INSERT INTO Operations (idOperation, idOccurrence, idOperation_Manager, Type, State) VALUES (?,?,?,?,?)";
    global.connection.query(sql, [
        req.body.idOperation,
        req.body.idOccurrence,
        req.body.idOperation_Manager,
        req.body.Type,
        req.body.State
        ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}

//UPDATE:
function updateOperation(req, res){
    let sql = "UPDATE Colaborators SET idOccurrence=?, idOperation_Manager=?, Type=?, State=? WHERE idOperation=?";
    global.connection.query(sql, [
        req.body.idOccurrence,
        req.body.idOperation_Manager,
        req.body.Type,
        req.body.State,
        req.params.idOperation
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
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
    readOperationByState: readOperationByState,
    deleteOperation: deleteOperation,
    updateOperation: updateOperation,
    addOperation: addOperation
}