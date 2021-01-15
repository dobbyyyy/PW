const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);


//LIST:
router.get('/urgency_levels', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Urgency_Level ORDER BY idUrgency_Level DESC', res);
});

//READ ID:
router.get('/urgency_levels/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idUrgency_Level=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Urgency_Level idUrgency_Level ' + filter, res);
});

//DELETE FISICO:
router.delete('/urgency_levels/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Urgency_Level WHERE idUrgency_Level=' + parseInt(req.params.id), res);
});

//SAVE:
router.post('/urgency_levels', (req, res) =>{
    const idUrgency_Level = req.body.idUrgency_Level;
    const Description = req.body.Description;
    bd.execSQLQuery(`INSERT INTO Urgency_Level (idUrgency_Level, Description)
    VALUES('${idUrgency_Level}','${Description}')`, res);
});

//UPDATE:
router.put('/urgency_levels/:id', (req, res) =>{
    const idUrgency_Level = parseInt(req.params.id);
    const Description = req.body.Description;
    bd.execSQLQuery(`UPDATE Urgency_Level SET Description='${Description}'WHERE idUrgency_Level=${idUrgency_Level}`, res);
});