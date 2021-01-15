const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
app.use('/', router);


//LIST:
router.get('/occurrence_type', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Occurrences_Type ORDER BY idOccurrence_Type DESC', res);
});

//READ ID:
router.get('/occurrence_type/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idOccurrence_Type=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Occurrences_Type idOccurrence_Type ' + filter, res);
});

//DELETE FISICO:
router.delete('/occurrence_type/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Occurrences_Type WHERE idOccurrence_Type=?', update, function(err, rows, fields) {
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
router.post('/occurrence_type',(req,res)=>{
        const idOccurrence_Type = req.body.idOccurrence_Type;
        const Description = req.body.Description;
        if (Description != "NULL" && typeof(Description) != "undefined") {
            const post = {Description: Description};
            //criar e executar a query de gravação na BD para inserir os dados presentes no post
            const query = bd.connection.query('INSERT INTO Occurrences_Type SET ?', post, function(err, rows, fields) {
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
router.put('/occurrence_type/:id', (req, res) =>{
    const idOccurrence_Type = parseInt(req.params.id);
    const Description = req.body.Description;
    const update = [Description,idOccurrence_Type];
    
    bd.connection.query('UPDATE Occurrences_Type SET Description=? WHERE idOccurrence_Type=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("here");
        }
    });
    res.end();
});


/*
router.post('/occurrence_type',(req,res)=>{
        //const idOccurrence_Type = req.body.idOccurrence_Type;
        const Description = req.body.Description;
        if (Description != "NULL"  && typeof(Description) != "undefined"){
        const post = {Description: Description};
        bd.connection.query('INSERT INTO Occurrences_Type SET ?',post, function(err,result){
            if(err){
                console.log(err);
            } else{
                console.log("Database succesfully updated.")
            }
        });
        }
        else{
            console.log("data missing")
        }
    res.end();
        
});*/

