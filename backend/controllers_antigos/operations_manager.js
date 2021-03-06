const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);

//LIST:
function readOperations_Manager(req, res){
    bd.execSQLQuery('SELECT * FROM Operations_Manager ORDER BY idOperation_Manager DESC', res);
};

//READ ID:
router.get('/operations_manager/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation_Manager=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations_Manager idOperation_Manager ' + filter, res);
});

//DELETE FISICO:
function deleteOperations_Manager(req, res){
    bd.execSQLQuery('DELETE FROM Operations_Manager WHERE idOperation_Manager=' + parseInt(req.params.id), res);
};


//SAVE:
function addOperations_Manager(req, res){
    console.log(req.body.Name)
    const idOperation_Manager = req.body.idOperation_Manager;
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Password = req.body.Password;
    bd.execSQLQuery(`INSERT INTO Operations_Manager (idOperation_Manager, Username, Name, Password)
    VALUES('${idOperation_Manager}','${Username}','${Name}','${Password}')`, res);
};


//UPDATE:
router.put('/operations_manager/:id', (req, res) =>{
    const idOperation_Manager = parseInt(req.params.id);
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Password = req.body.Password;
    bd.execSQLQuery(`UPDATE Operations_Manager SET Username='${Username}', Name='${Name}', Password='${Password}'WHERE idOperation_Manager=${idOperation_Manager}`, res);
});

module.exports = {
    readOperations_Manager: readOperations_Manager,
    deleteOperations_Manager: deleteOperations_Manager,
    addOperations_Manager: addOperations_Manager
}