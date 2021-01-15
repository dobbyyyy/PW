const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);

//LIST:
router.get('/occurrences', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Occurrences ORDER BY idOccurrence DESC', res);
});

//READ ID:
router.get('/occurrences/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOccurrence=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Occurrences idOccurrence ' + filter, res);
});

//DELETE FISICO:
router.delete('/occurrences/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Occurrences WHERE idOccurrence=?', update, function(err, rows, fields) {
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
router.post('/occurrences',(req,res)=>{
    const idOccurrence = req.body.idOccurrence;
    const Description = req.body.Description;
    const State = req.body.State;
    const Type = req.body.Type;
    const idUrgency_Level = req.body.idUrgency_Level;
        if (Description != "NULL" && State != "NULL" && typeof(Description) != "undefined") {
            const post = {Description: Description, State: State, Type: Type, idUrgency_Level: idUrgency_Level};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Occurrences SET ?', post, function(err, rows, fields) {
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
router.put('/occurrences/:id', (req, res) =>{
    const idOccurrence = parseInt(req.params.id);
    const Description = req.body.Description;
    const State = req.body.State;
    const Type = req.body.Type;
    const idUrgency_Level = req.body.idUrgency_Level;
    const update = [Description,State,Type,idUrgency_Level,idOccurrence];
    
    bd.connection.query('UPDATE Occurrences SET Description=?, State=?, Type=?, idUrgency_Level=? WHERE idOccurrence=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});