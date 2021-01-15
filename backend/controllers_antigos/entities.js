const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);


//LIST:
function readEntity(req, res){
    console.log("REEAD")
    bd.execSQLQuery('SELECT * FROM Entities ORDER BY idEntity DESC', res);
};

//READ ID:
router.get('/entities/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idEntity=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Entities idEntity ' + filter, res);
});

//DELETE FISICO:
function deleteEntity(req, res){
    bd.execSQLQuery('DELETE FROM Entities WHERE idEntity=' + parseInt(req.params.id), res);
};


//SAVE:
function addEntity(req, res){
    console.log("ENTITITES")
    const idEntity = req.body.idEntity;
    const NameEntity = req.body.NameEntity;
    const TypeEntity = req.body.Type;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    bd.execSQLQuery(`INSERT INTO Entities (idEntity, NameEntity, TypeEntity, Street, District, Zip_Code)
    VALUES('${idEntity}','${NameEntity}','${TypeEntity}','${Street}','${District}','${Zip_Code}')`, res);
};

//UPDATE:
function updateEntity(req, res){
    const idEntity = parseInt(req.params.id);
    const NameEntity = req.body.NameEntity;
    const TypeEntity = req.body.TypeEntity;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    bd.execSQLQuery(`UPDATE Entities SET NameEntity='${NameEntity}', TypeEntity='${TypeEntity}', Street='${Street}', District='${District}', Zip_Code='${Zip_Code}' WHERE idEntity=${idEntity}`, res);
};

module.exports = {
    readEntity: readEntity,
    deleteEntity: deleteEntity,
    updateEntity: updateEntity,
    addEntity: addEntity
}