const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/material_operacoes', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Materials_Operation ORDER BY idMaterial_Operation DESC', res);
});

//READ ID:
router.get('/material_operacoes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idMaterial_Operation =' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials_Operation idMaterial_Operation ' + filter, res);
});

//DELETE FISICO:
router.delete('/material_operacoes/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Materials_Operation WHERE idMaterial_Operation=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/material_operacoes', (req, res) =>{
    const idMaterial_Operation = req.body.idMaterial_Operation;
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    bd.execSQLQuery(`INSERT INTO Materials_Operation (idMaterial_Operation, Name, Quantity)
    VALUES('${idMaterial_Operation}','${Name}','${Quantity}')`, res);
});

//UPDATE:
router.patch('/material_operacoes/:id', (req, res) =>{
    const idMaterial_Operation = parseInt(req.params.id);
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    bd.execSQLQuery(`UPDATE Materials_Operation SET Name='${Name}', Quantity='${Quantity}' WHERE idMaterial_Operation=${idMaterial_Operation}`, res);
});