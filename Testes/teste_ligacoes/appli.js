// app = require('./main');
const router = require('express').Router();
const bd = require('./config/mysql');
// bd = require('./backend/config/mysql');
const express = require('express');
const app = express();


const routeAccusers = require('./controllers/accusers.js');
const routePartners = require('./controllers/partners.js');
const routeColaborators = require('./controllers/colaborators.js');
const routeOperational = require('./controllers/operationals.js');
const routeOperations = require('./controllers/operations.js');
const routeOperations_Center = require('./controllers/operations_center.js');
const routeOperations_Manager = require('./controllers/operations_manager.js');
const routeUrgency_Levels = require('./controllers/urg_levels.js');
const routeOccurrences = require('./controllers/occurrences.js');
const routeOccurrences_Types = require('./controllers/occ_types.js');
const routeMaterials = require('./controllers/materials.js');
const routeMaterials_Operation = require('./controllers/materials_operation.js');
const routeMaterials_Type = require('./controllers/materials_type.js');
const routeRequests = require('./controllers/requests.js');
const routeEntities = require('./controllers/entities.js');
const routeLocalization = require('./controllers/localization.js');


app.use('/', router);
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

console.log("API");

