const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);

//LIST:
router.get('/operationals', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Operational ORDER BY idOperational DESC', res);
});

//READ ID:
router.get('/operationals/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOperational=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Operational idOperational ' + filter, res);
});

//DELETE FISICO:
router.delete('/operationals/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Operational WHERE idOperational=?', update, function(err, rows, fields) {
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
router.post('/operationals',(req,res)=>{
    const idOperational = req.body.idOperational;
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
        if (Username != "NULL" && Name != "NULL" && typeof(Username) != "undefined") {
            const post = {Username: Username, Name: Name, Email: Email, Password: Password, Telephone: Telephone, Type: Type};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Operational SET ?', post, function(err, rows, fields) {
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
router.put('/operationals/:id', (req, res) =>{
    const idOperational = parseInt(req.params.id);
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
    const update = [Username,Name,Email,Password,Telephone,Type,idOperational];
    
    bd.connection.query('UPDATE Operational SET Username=?, Name=?, Email=?, Password=?, Telephone=?, Type=? WHERE idOperational=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});