const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/ocurrencias', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Occurrences ORDER BY idOccurrence DESC', res);
});

//READ ID:
router.get('/ocurrencias/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOccurrence=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Occurrences idOccurrence ' + filter, res);
});

//DELETE FISICO:
router.delete('/ocurrencias/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Occurrences WHERE idOccurrence=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/ocurrencias', (req, res) =>{
    const idOccurrence = req.body.idOccurrence;
    const Description = req.body.Description;
    const State = req.body.State;
    bd.execSQLQuery(`INSERT INTO Occurrences (idOccurrence, Description, State)
    VALUES('${idOccurrence}','${Description}','${State}')`, res);
});

//UPDATE:
router.patch('/ocurrencias/:id', (req, res) =>{
    const idOccurrence = parseInt(req.params.id);
    const Description = req.body.Description;
    const State = req.body.State;
    bd.execSQLQuery(`UPDATE Occurrences SET Description='${Description}', State='${State}' WHERE idOccurrence=${idOccurrence}`, res);
});