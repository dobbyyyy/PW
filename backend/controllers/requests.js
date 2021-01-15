const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
const express = require('express');
const { body, validationResult } = require('express-validator');
app.use('/', router);

app.use(express.static('../../frontend'));


//LIST:
router.get('/requests', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Requests ORDER BY idRequest DESC', res);
});

//READ ID:
router.get('/requests/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idRequest= ' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Requests idRequest ' + filter, res);
});
    
//DELETE FISICO:
router.delete('/requests/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Requests WHERE idRequest=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/requests',[
    body('Type').not().isEmpty().withMessage('Type is a required field'),
    body('Description').isLength({min: 1, max: 155}).withMessage('Description should have between 4 and 8 chars')
], function(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const idRequest = req.body.idRequest;
    const Type = req.body.Type;
    const Description = req.body.Description;
    //const idAccuser = req.body.idAccuser;
    //const idEntity = req.body.idEntity;
    const post = {Type: Type ,Description: Description};
    const query = bd.connection.query('INSERT INTO Requests SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("Database succesfully updated.")
                    res.redirect('/')
                }
                else {
                    console.log(err);
                    console.log("data missing")
                    res.redirect('/registardenuncia3')
                }
            });
            //res.end();
});

//UPDATE:
router.put('/requests/:id', (req, res) =>{
    const idRequest = parseInt(req.params.id);
    const Type = req.body.Type;
    const Description = req.body.Description;
    const idAccuser = req.body.idAccuser;
    const idEntity = req.body.idEntity;
    bd.execSQLQuery(`UPDATE Requests SET Type='${Type}', 'Description='${Description}', idAccuser='${idAccuser}', idEntity='${idEntity}' WHERE idRequest=${idRequest}`, res);
});