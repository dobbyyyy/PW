const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/nivel_urgencia', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Urgency_Level ORDER BY idUrgency_Level DESC', res);
});

//READ ID:
router.get('/nivel_urgencia/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idUrgency_Level=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Urgency_Level idUrgency_Level ' + filter, res);
});

//DELETE FISICO:
router.delete('/nivel_urgencia/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Urgency_Level WHERE idUrgency_Level=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/nivel_urgencia', (req, res) =>{
    const idUrgency_Level = req.body.idUrgency_Level;
    bd.execSQLQuery(`INSERT INTO Urgency_Level (idUrgency_Level)
    VALUES('${idUrgency_Level}')`, res);
});

//UPDATE:
router.patch('/nivel_urgencia/:id', (req, res) =>{
    const idUrgency_Level = parseInt(req.params.id);
    bd.execSQLQuery(`UPDATE Urgency_Level SET WHERE idUrgency_Level=${idUrgency_Level}`, res);
});