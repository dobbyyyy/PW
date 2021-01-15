const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);


//ROTA CRUZADA (Operations_Center) PARCEIROS PARA UMA OCORRENCIA
//POST:
app.post('/occurrences/:idOccurrence/partners/:idPartner/operationals/:idOperational', (req, res) =>{
    const idOccurrence = parseInt(req.params.idOccurrence)
    const idPartner = parseInt(req.params.idPartner)
    const idOperational = parseInt(req.params.idOperational)
    bd.execSQLQuery(`INSERT INTO Operations_Center (idOccurrence, idPartner, idOperational)
    VALUES('${idOccurrence}','${idPartner}','${idOperational}')`, res);
    });
    

//LIST:
router.get('/occurrences/:idOccurrence/partners/', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operations_Center ORDER BY idPartner DESC', res);
});

//DELETE:
router.delete('/occurrences/:idOccurrence/partners/:idPartner', (req, res) =>{
    const idOccurrence = parseInt(req.params.idOccurrence)
    const idPartner = parseInt(req.params.idPartner)
    bd.execSQLQuery('DELETE FROM Operations_Center WHERE idPartner=' + parseInt(req.params.idPartner) ,res);
}); 

//UPDATE:
router.put('/occurrences/:idOccurrence/partners/', (req, res) =>{
    const idOccurrence = parseInt(req.params.id);
    const idPartner = req.body.idPartner;
    bd.execSQLQuery(`UPDATE Operation_Operational SET idPartner='${idPartner}' WHERE idOccurrence=${idOccurrence}`, res);
});


//ROTA CRUZADA (Operations_Center) OPERACIONAL PARA UMA OCORRENCIA
//POST:
app.post('/occurrences/:idOccurrence/operationals/:idOperational', (req, res) =>{
    const idOccurrence = parseInt(req.params.idOccurrence)
    const idOperational = parseInt(req.params.idOperational)
    bd.execSQLQuery(`INSERT INTO Operations_Center (idOccurrence, idOperational)
    VALUES('${idOccurrence}','${idOperational}')`, res);
    });
    

//LIST:
router.get('/occurrences/:idOccurrence/operationals/', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operations_Center ORDER BY idOperational DESC', res);
});

//DELETE:
router.delete('/occurrences/:idOccurrence/operationals/:idOperational', (req, res) =>{
    const idOccurrence = parseInt(req.params.idOccurrence)
    const idOperational = parseInt(req.params.idOperational)
    bd.execSQLQuery('DELETE FROM Operations_Center WHERE idOperational=' + parseInt(req.params.idOperational) ,res);
});

//UPDATE:
router.put('/occurrences/:idOccurrence/operationals/', (req, res) =>{
    const idOccurrence = parseInt(req.params.id);
    const idOperational = req.body.idOperational;
    bd.execSQLQuery(`UPDATE Operation_Operational SET idOperational='${idOperational}' WHERE idOccurrence=${idOccurrence}`, res);
});
