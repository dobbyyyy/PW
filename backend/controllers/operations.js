const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
router.get('/operations', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operations ORDER BY idOperation DESC', res);
});

//READ ID:
router.get('/operations/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations idOperation ' + filter, res);
});

//DELETE FISICO:
router.delete('/operations/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Operations WHERE idOperation=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Database succesfully updated.")
        }
        else {
            console.log(err);
        }
    });
    res.end();
});


//SAVE:
router.post('/operations', (req, res) =>{
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
    if (idOperation != "NULL" && typeof(idOperation) != "undefined") {
            const post = {idOperation: idOperation, Type: Type, idOccurrence: idOccurrence, idOperation_Manager: idOperation_Manager,idMaterial_Operation: idMaterial_Operation, idRequest: idRequest, idAccuser: idAccuser, idColaborator: idColaborator, idEntity: idEntity, idPartner:idPartner};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Operations SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("Database succesfully updated.")
                }
                else {
                    console.log(err);
                    console.log("data missing")
                }
            });
        }
        else
            console.log("data")
            res.end();
    
});

//UPDATE:
router.put('/operations/:id', (req, res) =>{
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
    const update = [Type,idOccurrence,idOperation_Manager,idMaterial_Operation,idRequest,idAccuser,idColaborator,idEntity,idPartner,idOperation];
    
    bd.connection.query(`UPDATE Operations SET Type=?, idOccurrence=?, idOperation_Manager=?, idMaterial_Operation=?, idRequest=?,
    idAccuser=?, idColaborator=?, idEntity=?, idPartner=? WHERE idOperation=?`, update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});

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