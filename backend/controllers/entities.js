const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
const express = require('express');
const { body, validationResult } = require('express-validator');
app.use('/', router);
app.use(express.static('../../frontend'));


//LIST:
router.get('/entities', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Entities ORDER BY idEntity DESC', res);
});

//READ ID:
router.get('/entities/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idEntity=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Entities idEntity ' + filter, res);
});

//DELETE FISICO:
router.delete('/entities/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Entities WHERE idEntity=?', update, function(err, rows, fields) {
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
router.post('/entities',[
    body('Name').not().isEmpty().withMessage('Name is a required field'),
    body('District').not().isEmpty().withMessage('District is a required field'),
    body('Zip_Code').isLength({min: 4, max: 8}).withMessage('Zip_Code should have between 4 and 8 chars')
], function(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const idEntity = req.body.idEntity;
    const Name = req.body.Name;
    //const Type = req.body.Type;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    const post = {Name: Name, Street: Street, District: District, Zip_Code: Zip_Code};
    const query = bd.connection.query('INSERT INTO Entities SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("Database succesfully updated.")
                    res.redirect('/registardenuncia3')
                }
                else {
                    console.log(err);
                    console.log("data missing")
                    res.redirect('/registardenuncia2')
                }
            });
            //res.end();
});


//UPDATE:
router.put('/entities/:id', (req, res) =>{
    const idEntity = parseInt(req.params.id);
    const Name = req.body.Name;
    const Type = req.body.Type;
    const Street = req.body.Street;
    const District = req.body.District;
    const Zip_Code = req.body.Zip_Code;
    const update = [Name,Type,Street,District,Zip_Code,idEntity];
    
    bd.connection.query('UPDATE Entities SET Name=?, Type=?, Street=?, District=?, Zip_Code=? WHERE idEntity=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});