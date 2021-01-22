const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);



//LIST:
router.get('/materials_type', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Materials_Type ORDER BY idMaterial_Type DESC', res);
});

//READ ID:
router.get('/materials_type/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idMaterial_Type=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials_Type idMaterial_Type ' + filter, res);
});

//DELETE FISICO:
router.delete('/materials_type/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Materials_Type WHERE idMaterial_Type=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/materials_type', (req, res) =>{
    const idMaterial_Type = req.body.idMaterial_Type;
    const Description = req.body.Description;
    bd.execSQLQuery(`INSERT INTO Materials_Type (idMaterial_Type, Description)
    VALUES('${idMaterial_Type}','${Description}')`, res);
});

//UPDATE:
router.put('/materials_type/:id', (req, res) =>{
    const idMaterial_Type = parseInt(req.params.id);
    const Description = req.body.Description;
    bd.execSQLQuery(`UPDATE Materials_Type SET Description='${Description}' WHERE idMaterial_Type=${idMaterial_Type}`, res);
});