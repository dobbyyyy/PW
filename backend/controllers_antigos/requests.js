const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
function readRequest(req, res){
    bd.execSQLQuery('SELECT * FROM Requests ORDER BY idRequest DESC', res);
};

/*//READ ID:
router.get('/requests/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idRequest= ' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT FROM Requests idRequest ' + filter, res);
});*/
    
//DELETE FISICO:
function deleteRequest(req, res){
    bd.execSQLQuery('DELETE FROM Requests WHERE idRequest=' + parseInt(req.params.id), res);
};


//SAVE:
function addRequest(req, res){
    const idRequest = req.body.idRequest;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Telephone = req.body.Telephone;
    const NameEntity = req.body.NameEntity;
    const TypeEntity = req.body.TypeEntity;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    const Type = req.body.Type;
    const Description = req.body.Description;
    bd.execSQLQuery(`INSERT INTO Requests (idRequest, Name, Email, Address, Telephone, NameEntity, TypeEntity, Street, District, Zip_Code, Type, Description)
    VALUES('${idRequest}','${Name}','${Email}','${Address}','${Telephone}','${NameEntity}','${TypeEntity}','${Street}','${District}','${Zip_Code}','${Type}','${Description}')`, res);
    bd.execSQLQuery(`INSERT INTO Accusers (Name, Email, Address, Telephone) 
    VALUES('${Name}','${Email}','${Address}','${Telephone}')`, res);
    console.log(Name,Email,Address,Telephone);
    bd.execSQLQuery(`INSERT INTO Entities (NameEntity, TypeEntity, Street, District, Zip_Code)
    VALUES('${NameEntity}','${TypeEntity}','${Street}','${District}','${Zip_Code}')`, res);
}

//UPDATE:
function updateRequest(req, res){
    const idRequest = parseInt(req.params.id);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Telephone = req.body.Telephone;
    const NameEntity = req.body.NameEntity;
    const TypeEntity = req.body.TypeEntity;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    const Type = req.body.Type;
    const Description = req.body.Description;
    bd.execSQLQuery(`UPDATE Requests SET Name='${Name}', Email='${Email}', Address='${Address}', Telephone='${Telephone}', NameEntity='${NameEntity}', TypeEntity='${TypeEntity}', Street='${Street}', District='${District}', Zip_Code='${Zip_Code}', Type='${Type}', 'Description='${Description}' WHERE idRequest=${idRequest}`, res);
};

function readRequestByState(req,res){
    const state = req.params.state;
    bd.execSQLQuery(`SELECT * FROM Requests WHERE State= '${req.params.state}'`, res);
}

module.exports = {
    readRequest: readRequest,
    readRequestByState: readRequestByState,
    deleteRequest: deleteRequest,
    updateRequest: updateRequest,
    addRequest: addRequest
}