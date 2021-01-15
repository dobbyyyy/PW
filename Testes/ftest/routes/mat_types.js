const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
app.use('/', router);

//LIST:
router.get('/tipo_material', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Materials_Type ORDER BY idType_Material DESC', res);
});

//READ ID:
router.get('/tipo_material/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idType_Material=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials_Type idType_Material ' + filter, res);
});

//DELETE FISICO:
router.delete('/tipo_material/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Materials_Type WHERE idType_Material=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/tipo_material', (req, res) =>{
    const idType_Material = req.body.idType_Material;
    bd.execSQLQuery(`INSERT INTO Materials_Type (idType_Material)
    VALUES('${idType_Material}')`, res);
});

//UPDATE:
router.patch('/tipo_material/:id', (req, res) =>{
    const idType_Material = parseInt(req.params.id);
    bd.execSQLQuery(`UPDATE Materials_Type SET WHERE idType_Material=${idType_Material}`, res);
});