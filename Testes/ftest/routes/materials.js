const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/material', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Materials ORDER BY idMaterial DESC', res);
});

//READ ID:
router.get('/material/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idMaterial =' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials idMaterial ' + filter, res);
});

//DELETE FISICO:
router.delete('/material/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Materials WHERE idMaterial=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/material', (req, res) =>{
    const idMaterial = req.body.idMaterial;
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    bd.execSQLQuery(`INSERT INTO Materials (idMaterial, Name, Quantity)
    VALUES('${idMaterial}','${Name}','${Quantity}')`, res);
});

//UPDATE:
router.patch('/material/:id', (req, res) =>{
    const idMaterial = parseInt(req.params.id);
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    bd.execSQLQuery(`UPDATE Materials SET Name='${Name}', Quantity='${Quantity}' WHERE idMaterial=${idMaterial}`, res);
});