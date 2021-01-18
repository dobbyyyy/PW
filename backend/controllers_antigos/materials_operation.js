const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql');
app.use('/', router);



//LIST:
function readMaterial_Operation(req, res){
    bd.execSQLQuery('SELECT * FROM Materials_Operation ORDER BY idMaterial_Operation DESC', res);
};

//READ ID:
router.get('/materials_operation/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idMaterial_Operation =' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials_Operation idMaterial_Operation ' + filter, res);
});

//DELETE FISICO:
function deleteMaterial_Operation(req, res){
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Materials_Operation WHERE idMaterial_Operation=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Database succesfully updated.")
        }
        else {
            console.log(err);
        }
    });
    res.end();
};


//SAVE:
function addMaterial_Operation(req,res){
    const idMaterial_Operation = req.body.idMaterial_Operation;
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    const idMaterial = req.body.idMaterial;
        if (Name != "NULL" && Quantity != "NULL" && typeof(Name) != "undefined") {
            const post = {Name: Name, Quantity: Quantity, idMaterial: idMaterial};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Materials_Operation SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("Database succesfully updated.")
                }
                else {
                    console.log(err);
                    console.log("data missing")
                }
            });
        }
        else
            console.log("data")
            res.end();
};

//UPDATE:
function updateMaterial_Operation(req, res){
    const idMaterial_Operation = parseInt(req.params.id);
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    const idMaterial = req.body.idMaterial;
    const update = [Name,Quantity,idMaterial,idMaterial_Operation];
    
    bd.connection.query('UPDATE Materials_Operation SET Name=?, Quantity=?, idMaterial=? WHERE idMaterial_Operation=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
};

module.exports = {
    readMaterial_Operation: readMaterial_Operation,
    deleteMaterial_Operation: deleteMaterial_Operation,
    updateMaterial_Operation: updateMaterial_Operation,
    addMaterial_Operation: addMaterial_Operation
}