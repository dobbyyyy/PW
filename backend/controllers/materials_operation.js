const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);


//LIST:
router.get('/materials_operation', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Materials_Operation ORDER BY idMaterial_Operation DESC', res);
});

//READ ID:
router.get('/materials_operation/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idMaterial_Operation =' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials_Operation idMaterial_Operation ' + filter, res);
});

//DELETE FISICO:
router.delete('/materials_operation/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Materials_Operation WHERE idMaterial_Operation=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/materials_operation', (req, res) =>{
    const idMaterial_Operation = req.body.idMaterial_Operation;
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    const idMaterial = req.body.idMaterial;
    bd.execSQLQuery(`INSERT INTO Materials_Operation (idMaterial_Operation, Name, Quantity, idMaterial)
    VALUES('${idMaterial_Operation}','${Name}','${Quantity}','${idMaterial}')`, res);
});

//UPDATE:
router.put('/materials_operation/:id', (req, res) =>{
    const idMaterial_Operation = parseInt(req.params.id);
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    const idMaterial = req.body.idMaterial;
    //const idMaterial = parseInt(req.params.id);
    bd.execSQLQuery(`UPDATE Materials_Operation SET Name='${Name}', Quantity='${Quantity}', idMaterial='${idMaterial}' WHERE idMaterial_Operation=${idMaterial_Operation}`, res);
});