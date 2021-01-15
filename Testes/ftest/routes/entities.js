const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/entidades', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Entities ORDER BY idEntity DESC', res);
});

//READ ID:
router.get('/entidades/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idEntity=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Entities idEntity ' + filter, res);
});

//DELETE FISICO:
router.delete('/entidades/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Entities WHERE idEntity=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/entidades', (req, res) =>{
    const idEntity = req.body.idEntity;
    const Door_num = req.body.Door_num;
    const Type = req.body.Type;
    bd.execSQLQuery(`INSERT INTO Entities (idEntity, Door_num, Type)
    VALUES('${idEntity}','${Door_num}','${Type}')`, res);
});

//UPDATE:
router.patch('/entidades/:id', (req, res) =>{
    const idEntity = parseInt(req.params.id);
    const Door_num = req.body.Door_num;
    const Type = req.body.Type;
    bd.execSQLQuery(`UPDATE Entities SET Door_num='${Door_num}', Type='${Type}' WHERE idEntity=${idEntity}`, res);
});