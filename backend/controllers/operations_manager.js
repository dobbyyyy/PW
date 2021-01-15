const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);

//LIST:
router.get('/operations_manager', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operations_Manager ORDER BY idOperation_Manager DESC', res);
});

//READ ID:
router.get('/operations_manager/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperation_Manager=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operations_Manager idOperation_Manager ' + filter, res);
});

//DELETE FISICO:
router.delete('/operations_manager/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Operations_Manager WHERE idOperation_Manager=?', update, function(err, rows, fields) {
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
router.post('/operations_manager', (req, res) =>{
    const idOperation_Manager = req.body.idOperation_Manager;
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Password = req.body.Password;
    if (Username != "NULL" && Name != "NULL" && typeof(Username) != "undefined") {
            const post = {Username: Username, Name: Name, Password: Password};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Operations_Manager SET ?', post, function(err, rows, fields) {
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
router.put('/operations_manager/:id', (req, res) =>{
    const idOperation_Manager = parseInt(req.params.id);
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Password = req.body.Password;
    const update = [Username,Name,Password,idOperation_Manager];
    
    bd.connection.query(`UPDATE Operations_Manager SET Username=?, Name=?, Password=?  WHERE idOperation_Manager=? `, update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});