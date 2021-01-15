const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
const express = require('express');
const { body, validationResult } = require('express-validator');
app.use('/', router);

app.use(express.static('../../frontend'));

//LIST:
router.get('/accusers', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Accusers ORDER BY idAccuser DESC', res);
});

//READ ID:
router.get('/accusers/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idAccuser=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Accusers idAccuser ' + filter, res);
});

//DELETE FISICO:
router.delete('/accusers/:id', (req, res) =>{
    const update =  parseInt(req.params.id)
    const query = bd.connection.query('DELETE FROM Accusers WHERE idAccuser=?', update, function(err, rows, fields) {
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
router.post('/accusers',[
    body('Name').not().isEmpty().withMessage('Name is a required field'),
    body('Email').isEmail().withMessage('A valid email is required'),
    body('Address').isLength({min: 5, max: 115}).withMessage('Address should have between 5 and 155 chars')
], function(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const idAccuser = parseInt(req.params.id);
    const Username = req.body.Username;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Address;
    const Telephone = req.body.Telephone;
    const post = {Username: Username, Name: Name, Email: Email, Password: Password, Address: Address, Telephone: Telephone};
    const query = bd.connection.query('INSERT INTO Accusers SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("Database succesfully updated.")
                    res.redirect('/registardenuncia2')
                }
                else {
                    console.log(err);
                    console.log("data missing")
                    res.redirect('/registardenuncia1')
                }
            });
            //res.end();
});

//UPDATE:
router.put('/accusers/:id', (req, res) =>{
    const idAccuser = parseInt(req.params.id);
    const Name = req.body.Name;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Address;
    const Telephone = req.body.Telephone;
    const update = [Name,Username,Email,Password,Address,Telephone,idAccuser];
    
    bd.connection.query('UPDATE Accusers SET Name=?, Username=?, Email=?, Password=?, Address=?, Telephone=? WHERE idAccuser=?', update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});