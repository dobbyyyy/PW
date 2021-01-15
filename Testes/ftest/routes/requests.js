const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/pedidos', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Requests ORDER BY idRequest DESC', res);
});

//READ ID:
router.get('/pedidos/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idRequest= ' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT FROM Requests idRequest ' + filter, res);
});
    
//DELETE FISICO:
router.delete('/pedidos/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Requests WHERE idRequest=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/pedidos', (req, res) =>{
    const idRequest = req.body.idRequest;
    const Type = req.body.Type;
    const State = req.body.State;
    bd.execSQLQuery(`INSERT INTO Requests(idRequest, Type, State)
    VALUES('${idRequest}','${Type}','${State}')`, res);
});

//UPDATE:
router.patch('/pedidos/:id', (req, res) =>{
    const idRequest = parseInt(req.params.id);
    const Type = req.body.Type;
    const State = req.body.State;
    bd.execSQLQuery(`UPDATE Requests SET Type='${Type}', State='${State}' WHERE idRequest=${idRequest}`, res);
});