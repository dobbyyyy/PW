const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
router.get('/colaborators', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Colaborators ORDER BY idColaborator DESC', res);
});

//READ ID:
router.get('/colaborators/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idColaborator=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Colaborators idColaborator ' + filter, res);
});

//DELETE FISICO:
router.delete('/colaborators/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Colaborators WHERE idColaborator=?', update, function(err, rows, fields) {
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
router.post('/colaborators',(req,res)=>{
    const idColaborator = req.body.idColaborator;
    const Name = req.body.Name;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
        if (Name != "NULL" && Username != "NULL" && typeof(Name) != "undefined") {
            const post = {Name: Name, Username: Username, Email: Email, Password: Password, Telephone: Telephone};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Colaborators SET ?', post, function(err, rows, fields) {
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
            //res.end();
});


//UPDATE:
router.put('/colaborators/:id', (req, res) =>{
    const idColaborator = parseInt(req.params.id);
    const Name = req.body.Name;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Telephone = req.body.Telephone;
    const update = [Name,Username,Email,Password,Telephone,idColaborator];
    
    bd.connection.query('UPDATE Colaborators SET Name=?, Username=?, Email=?, Password=?, Telephone=? WHERE idColaborator=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});