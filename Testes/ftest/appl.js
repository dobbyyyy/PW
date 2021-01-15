const app = require('./inde');
const router = require('express').Router();
const bd = require('./mysql');
const routeColaborator = require('./routes/colaborators.js');
const routePartner = require('./routes/partners.js');
const routeOperational = require('./routes/operationals.js');
const routeAccuser = require('./routes/accusers.js');
const routeEntity = require('./routes/entities.js');
const routeOccurrence = require('./routes/occurrences.js');
const routeOperation = require('./routes/operations.js');
const routeOperationManager = require('./routes/opmanager.js');
const routeMaterials = require('./routes/materials.js');
const routeMaterial_peration = require('./routes/mat_operations.js');
const routeLocalizations = require('./routes/localizations.js');
const routeOperationCentre = require('./routes/op_centre.js');
const routeUrgencyLevels= require('./routes/urg_levels.js');
const routeOccurrencesTypes = require('./routes/occ_types.js');
const routeMaterialsTypes = require('./routes/mat_types.js');

app.use('/', router);
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

console.log("API");