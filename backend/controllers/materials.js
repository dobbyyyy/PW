const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
router.get('/materials', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Materials ORDER BY idMaterial DESC', res);
});

//READ ID:
router.get('/materials/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idMaterial =' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Materials idMaterial ' + filter, res);
});

//DELETE FISICO:
router.delete('/materials/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Materials WHERE idMaterial=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Database succesfully updated.")
        }
        else {
            console.log(err);
        }
    });
    res.end();
});


//SAVE:
router.post('/materials',(req,res)=>{
    const idMaterial = req.body.idMaterial;
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    const Material_Type = req.body.Material_Type;
        if (Name != "NULL" && Quantity != "NULL" && typeof(Name) != "undefined") {
            const post = {Name: Name, Quantity: Quantity, Material_Type: Material_Type};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Materials SET ?', post, function(err, rows, fields) {
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
});

//UPDATE:
router.put('/materials/:id', (req, res) =>{
    const idMaterial = parseInt(req.params.id);
    const Name = req.body.Name;
    const Quantity = req.body.Quantity;
    const Material_Type = req.body.Material_Type;
    const update = [Name,Quantity,Material_Type,idMaterial];
    
    bd.connection.query('UPDATE Materials SET Name=?, Quantity=?, Material_Type=? WHERE idMaterial=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});