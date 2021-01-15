const app = require('../../main');
const router = require('express').Router();
const bd = require('../config/mysql1');
const { body, validationResult } = require('express-validator');
app.use('/', router);
console.log("HERE")
//LIST:
router.get('/partners', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Partners ORDER BY idPartner DESC', res);
});

/*function readPartner(req, res){
    console.log("GET")
    bd.execSQLQuery('SELECT * FROM Partners ORDER BY idPartner DESC', res);
};*/

//READ ID:
router.get('/partners/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idPartner=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Partners idPartner ' + filter, res);
});

//DELETE FISICO:
router.delete('/partners/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Partners WHERE idPartner=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/partners',[
    body('Name').not().isEmpty().withMessage('Name is a required field'),
    body('Email').isEmail().withMessage('A valid email is required'),
    body('Address').isLength({min: 5, max: 115}).withMessage('Address should have between 10 and 155 chars')
], function(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const idPartner = parseInt(req.params.id);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Telephone = req.body.Telephone;
    const Address = req.body.Address;
    const post = {idPartner: idPartner, Name: Name, Email: Email, Telephone: Telephone, Address:Address}
    const query = bd.connection.query('INSERT INTO Partners SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("Database succesfully updated.")
                }
                else {
                    console.log(err);
                    console.log("data missing")
                }
            });
            res.end();
});

//UPDATE:
router.put('/partners/:id', (req, res) =>{
    const idPartner = parseInt(req.params.id);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Telephone = req.body.Telephone;
    const Address = req.body.Address;
    const update = [Name,Email,Telephone,Address,idPartner];
    
    bd.connection.query(`UPDATE Partners SET Name=?, Email=?, Telephone?, Address=? WHERE idPartner=?`, update, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Database succesfully updated");
        }
    });
    res.end();
});