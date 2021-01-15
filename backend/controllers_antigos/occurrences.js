const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);

//LIST:
function readOccurrence(req, res){
    bd.execSQLQuery('SELECT * FROM Occurrences ORDER BY idOccurrence DESC', res);
};

//READ ID:
router.get('/occurrences/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOccurrence=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Occurrences idOccurrence ' + filter, res);
});

//DELETE FISICO:
function deleteOccurrence(req, res){
    bd.execSQLQuery('DELETE FROM Occurrences WHERE idOccurrence=' + parseInt(req.params.id), res);
};


//SAVE:
function addOccurrence(req, res){
    const idOccurrence = req.body.idOccurrence;
    const Description = req.body.Description;
    const State = req.body.State;
    const Type = req.body.Type;
    const idUrgency_Level = req.body.idUrgency_Level;
    bd.execSQLQuery(`INSERT INTO Occurrences (idOccurrence, Description, State, Type, idUrgency_Level)
    VALUES('${idOccurrence}','${Description}','${State}','${Type}','${idUrgency_Level}')`, res);
};

//UPDATE:
function updateOccurrence(req, res){
    const idOccurrence = parseInt(req.params.id);
    const Description = req.body.Description;
    const State = req.body.State;
    const Type = req.body.Type;
    const idUrgency_Level = req.body.idUrgency_Level;
    //const idUrgency_Level = parseInt(req.params.id);
    bd.execSQLQuery(`UPDATE Occurrences SET Description='${Description}', State='${State}', Type='${Type}', idUrgency_Level='${idUrgency_Level}' WHERE idOccurrence=${idOccurrence}`, res);
};

module.exports = {
    readOccurence: readOccurrence,
    deleteOccurrence: deleteOccurrence,
    updateOccurrence: updateOccurrence,
    addOccurrence: addOccurrence
}