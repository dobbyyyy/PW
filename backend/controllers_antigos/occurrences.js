const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);

//LIST:
function readOccurrence(req, res){
    bd.execSQLQuery('SELECT * FROM Occurrences ORDER BY idOccurrence DESC', res);
};

//READ ID:
function readOccurrenceById(req, res){
    let filter = '';
    if(req.params.id) filter = ' WHERE idOccurrence=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Occurrences idOccurrence ' + filter, res);
};

//DELETE FISICO:
function deleteOccurrence(req, res){
    bd.execSQLQuery('DELETE FROM Occurrences WHERE idOccurrence=' + parseInt(req.params.id), res);
};


//SAVE:
function addOccurrence(req, res){
    const idOccurrence = req.body.idOccurrence;
    const Type = req.body.Type;
    const idRequest = req.body.idRequest;
    const idUrgency_Level = req.body.idUrgency_Level;
    const idEntity = req.body.idEntity;
    const idColaborator = req.body.idColaborator;
    const idPartner = req.body.idPartner;
    const idOperational = req.body.idOperational;
    const idMaterial = req.body.idMaterial;
    const State = req.body.State;
    bd.execSQLQuery(`INSERT INTO Occurrences (idOccurrence, Type, idRequest, idUrgency_Level, idEntity, idColaborator, idPartner, idOperational, idMaterial, State)
    VALUES('${idOccurrence}','${Type}','${idRequest}','${idUrgency_Level}','${idEntity}','${idColaborator}','${idPartner}','${idOperational}','${idMaterial}','${State}')`, res);
};

//UPDATE:
function updateOccurrence(req, res){
    const idOccurrence = parseInt(req.params.id);
    const Type = req.body.Type;
    const idRequest = req.body.idRequest;
    const idUrgency_Level = req.body.idUrgency_Level;
    const idEntity = req.body.idEntity;
    const idColaborator = req.body.idColaborator;
    const idPartner = req.body.idPartner;
    const idOperational = req.body.idOperational;
    const idMaterial = req.body.idMaterial;
    const State = req.body.State;
    bd.execSQLQuery(`UPDATE Occurrences SET Type='${Type}', idRequest='${idRequest}', idUrgency_Level='${idUrgency_Level}', idEntity='${idEntity}', idColaborator='${idColaborator}', idPartner='${idPartner}', idOperational='${idOperational}', idMaterial='${idMaterial}', State='${State}' WHERE idOccurrence=${idOccurrence}`, res);
};

function readOccurrenceByState(req,res){
    const state = req.params.state;
    bd.execSQLQuery(`SELECT * FROM Occurrences WHERE State= '${req.params.state}'`, res);
}


module.exports = {
    readOccurrence: readOccurrence,
    readOccurrenceById: readOccurrenceById,
    readOccurrenceByState: readOccurrenceByState,
    deleteOccurrence: deleteOccurrence,
    updateOccurrence: updateOccurrence,
    addOccurrence: addOccurrence
}