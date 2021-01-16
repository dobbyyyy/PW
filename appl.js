const app = require('./main');
const router = require('express').Router();
const bd = require('./backend/config/mysql1');
const express = require('express');
const bodyParser = require('body-parser')
//const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const controllerAccuser = require('./backend/controllers_antigos/accusers.js');
const controllerPartner = require('./backend/controllers_antigos/partners.js');
const controllerColaborator = require('./backend/controllers_antigos/colaborators.js');
const controllerOperational = require('./backend/controllers_antigos/operationals.js');
const controllerOperation = require('./backend/controllers_antigos/operations.js');
const routeOperations_Manager = require('./backend/controllers/operations_manager.js');
const controllerOccurrence = require('./backend/controllers_antigos/occurrences.js');
const routeUrgency_Levels = require('./backend/controllers/urg_levels.js');
const controllerMaterial = require('./backend/controllers_antigos/materials.js');
const routeMaterials_Operation = require('./backend/controllers/materials_operation.js');
const controllerRequest = require('./backend/controllers_antigos/requests.js');
const controllerEntity = require('./backend/controllers_antigos/entities.js');

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

router.get('/occurrences1/', controllerOccurrence.readOccurence);
router.post('/occurrences1/', controllerOccurrence.addOccurrence);
router.delete('/occurrences1/:id', controllerOccurrence.deleteOccurrence);
router.put('/occurrences1/:id', controllerOccurrence.updateOccurrence);

router.get('/operationals1/', controllerOperational.readOperational);
router.post('/operationals1/', controllerOperational.addOperational);
router.delete('/operationals1/:id', controllerOperational.deleteOperational);
router.put('/operationals1/:id', controllerOperational.updateOperational);

router.get('/operations1/', controllerOperation.readOperation);
router.post('/operations1/', controllerOperation.addOperation);
router.delete('/operations1/:id', controllerOperation.deleteOperation);
router.put('/operations1/:id', controllerOperation.updateOperation);

router.get('/requests1/', controllerRequest.readRequest);
router.post('/requests1/', controllerRequest.addRequest);
router.delete('/requests1/:id', controllerRequest.deleteRequest);
router.put('/requests1/:id', controllerRequest.updateRequest);

console.log("API");

module.exports = router;