const app = require('../inde');
const router = require('express').Router();
const bd = require('../mysql');
const { body, validationResult } = require('express-validator');
app.use('/', router);

//LIST:
router.get('/parceiros', (req, res) =>{
    bd.execSQLQuery('SELECT * FROM Partners ORDER BY idPartner DESC', res);
});

//READ ID:
router.get('/parceiros/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idPartner=' + parseInt(req.params.id);
    bd.execSQLQuery('SELECT * FROM Partners idPartner ' + filter, res);
});

//DELETE FISICO:
router.delete('/parceiros/:id', (req, res) =>{
    bd.execSQLQuery('DELETE FROM Partners WHERE idPartner=' + parseInt(req.params.id), res);
});


//SAVE:
router.post('/parceiros',[
    body('Name').not().isEmpty().withMessage('Name is a required field'),
    body('Email').isEmail().withMessage('A valid email is required'),
    body('Address').isLength({min: 10, max: 155}).withMessage('Password should have between 8 and 15 chars')
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
    bd.execSQLQuery(`INSERT INTO Partners (idPartner, Name, Email, Telephone, Address)
    VALUES('${idPartner}','${Name}','${Email}','${Telephone}','${Address}')`, res);
});

//UPDATE:
router.patch('/parceiros/:id', (req, res) =>{
    const idPartner = parseInt(req.params.id);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Telephone = req.body.Telephone;
    const Address = req.body.Address;
    bd.execSQLQuery(`UPDATE Partners SET Name='${Name}', Email='${Email}', Telephone='${Telephone}', Address='${Address}' WHERE idPartner=${idPartner}`, res);
});