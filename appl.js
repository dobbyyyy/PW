const app = require('./main');
const router = require('express').Router();
const bd = require('./backend/config/mysql1');
const express = require('express');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
//const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const usersRouter = require('./backend/routes/usersRouter'); 
const loginRouter = require('./backend/routes/loginRouter');

const controllerAccuser = require('./backend/controllers_antigos/accusers.js');
const controllerPartner = require('./backend/controllers_antigos/partners.js');
const controllerColaborator = require('./backend/controllers_antigos/colaborators.js');
const controllerOperational = require('./backend/controllers_antigos/operationals.js');
const controllerOperation = require('./backend/controllers_antigos/operations.js');
const controllerOperations_Manager = require('./backend/controllers_antigos/operations_manager.js');
const controllerOccurrence = require('./backend/controllers_antigos/occurrences.js');
const routeUrgency_Levels = require('./backend/controllers/urg_levels.js');
const controllerMaterial = require('./backend/controllers_antigos/materials.js');
const controllerMaterials_Operation = require('./backend/controllers_antigos/materials_operation.js');
const controllerRequest = require('./backend/controllers_antigos/requests.js');
const controllerEntity = require('./backend/controllers_antigos/entities.js');
const controllerUser = require('./backend/controllers_antigos/users.js');

const routeOperations_Center = require('./backend/controllers/operations_center.js');
const routeOperation_Operational = require('./backend/controllers/operations_operationals.js');


app.use('/', router);
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

router.get('/partners1/', controllerPartner.readPartner);
router.post('/partners1/', controllerPartner.addPartner);
router.delete('/partners1/:id', controllerPartner.deletePartner);
router.put('/partners1/:id', controllerPartner.updatePartner);

router.get('/accusers1/', controllerAccuser.readAccuser);
router.post('/accusers1/', controllerAccuser.addAccuser);
router.delete('/accusers1/:id', controllerAccuser.deleteAccuser);
router.put('/accusers1/:id', controllerAccuser.updateAccuser);

router.get('/colaborators1/', controllerColaborator.readColaborator);
router.post('/colaborators1/', controllerColaborator.addColaborator);
router.delete('/colaborators1/:id', controllerColaborator.deleteColaborator);
router.put('/colaborators1/:id', controllerColaborator.updateColaborator);

router.get('/entities1/', controllerEntity.readEntity);
router.post('/entities1/', controllerEntity.addEntity);
router.delete('/entities1/:id', controllerEntity.deleteEntity);
router.put('/entities1/:id', controllerEntity.updateEntity);

router.get('/materials1/', controllerMaterial.readMaterial);
router.post('/materials1/', controllerMaterial.addMaterial);
router.delete('/materials1/:id', controllerMaterial.deleteMaterial);
router.put('/materials1/:id', controllerMaterial.updateMaterial);

router.get('/materials_operation1/', controllerMaterials_Operation.readMaterial_Operation);
router.post('/materials_operation1/', controllerMaterials_Operation.addMaterial_Operation);
router.delete('/materials_operation1/:id', controllerMaterials_Operation.deleteMaterial_Operation);
router.put('/materials_operation1/:id', controllerMaterials_Operation.updateMaterial_Operation);

router.get('/occurrences1/', controllerOccurrence.readOccurrence);
router.get('/occurrences1/:id', controllerOccurrence.readOccurrenceById);
router.post('/occurrences1/', controllerOccurrence.addOccurrence);
router.delete('/occurrences1/:id', controllerOccurrence.deleteOccurrence);
router.put('/occurrences1/:id', controllerOccurrence.updateOccurrence);
router.get('/occurrences1/:state', controllerOccurrence.readOccurrenceByState);

router.get('/operationals1/', controllerOperational.readOperational);
router.post('/operationals1/', controllerOperational.addOperational);
router.delete('/operationals1/:id', controllerOperational.deleteOperational);
router.put('/operationals1/:id', controllerOperational.updateOperational);

router.get('/operations1/', controllerOperation.readOperation);
router.get('/operations1/:state', controllerOperation.readOperationByState);
router.post('/operations1/', controllerOperation.addOperation);
router.delete('/operations1/:id', controllerOperation.deleteOperation);
router.put('/operations1/:id', controllerOperation.updateOperation);

router.get('/requests1/', controllerRequest.readRequest);
router.post('/requests1/', controllerRequest.addRequest);
router.delete('/requests1/:id', controllerRequest.deleteRequest);
router.put('/requests1/:id', controllerRequest.updateRequest);

router.get('/operations_manager1/', controllerOperations_Manager.readOperations_Manager);
router.post('/operations_manager1/', controllerOperations_Manager.addOperations_Manager);
router.delete('/operations_manager1/:id', controllerOperations_Manager.deleteOperations_Manager);

router.get('/users/', controllerUser.list);
//router.get('/users/:username', controllerUser.read);
router.get('/users/:username', controllerUser.getPass);
app.use('/users', authenticationMiddleware, usersRouter);
app.use('/login', loginRouter);

function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login?fail=true');
}

app.post('/auth1',function(req,res){
    console.log("HERE")
	var username = req.body.username;
	var password = req.body.password;
	console.log(username&&password)
	if(username){/*
		bd.connection.query('SELECT * FROM users WHERE Username = ?', username, function(error,results,fields){
			if(results.length>0){
			    console.log(controllerUser.getPass(req,res));
			    if (controllerUser.getPass(req,res)===password){
				req.session.loggedIn=true;
				req.session.user=username;
				res.redirect('/home')}
			} else{
				res.send('Incorrect username or password!');
			}
			res.end();
		});*/
		let sql = "SELECT password FROM users WHERE username=?";
    	bd.connection.query(sql, req.body.username, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        //console.log(res.json(results[0].password));
        let pass = results[0].password;
        bcrypt.compareSync(password, pass);
        console.log(pass)
        if(password==pass){
        	res.send('OK')
        }
    });
	}else{
		res.send('Please enter username and password!');
		res.end();
	}
});


///test();

console.log("API");

module.exports = router;