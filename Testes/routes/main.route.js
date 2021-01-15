const router = require('express').Router();

//const controllerAccuser = require('./backend/controllers/accusers.js');
const controllerPartner = require('../controllers/partners.js');
//const controllerColaborator = require('../controllers/colaborators.js');
//const controllerOperational = require('../controllers/operationals.js');
//const controllerOperation = require('../controllers/operations.js');


//const controllerEntity = require('../controllers/entities.controller.js');
//const controllerOccurrence = require('../controllers/occurrences.controller.js');
//const controllerOperation = require('../controllers/operations.controller.js');
//const controllerRequest = require('../controllers/requests.controller.js');
//const controllerColaborator = require('../controllers/colaborator.controller.js');
//const controllerMaterial = require('../controllers/request.material.js');
//const controllerLocalization = require('../controllers/localization.controller.js');
//const controllerMail = require('../controllers/mail.controller.js');
/*
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "login");
router.get('/', function(req, res) {
    res.send("FCA Book");
    res.end();
});*/

//router.get('/accusers/', controllerAccuser.read);
//router.get('/acussers/:id', controllerAcusser.readID);
//router.post('/accusers/', isLoggedIn, controllerAccuser.save);
//router.put('/acussers/:id', isLoggedIn, isLoggedIn, controllerAcusser.update);
//router.put('/acussers/del/:id', isLoggedIn, controllerAcusser.deleteL);
//router.delete('/acussers/:id', isLoggedIn, controllerAcusser.deleteF);

/*router.get('/entities/', controllerEntity.read);
router.get('/entities/:id', controllerEntity.readID);
router.post('/entities/', isLoggedIn, controllerEntity.save);
router.put('/entities/:id', isLoggedIn, controllerEntity.update);
router.put('/entities/del/:id', isLoggedIn, controllerEntity.deleteL);
router.delete('/entities/:id', isLoggedIn, controllerEntity.deleteF);

router.get('/ocurrences/', controllerOccurrence.read);
router.get('/ocurrences/:id', controllerOccurrence.readID);
router.post('/ocurrences/', isLoggedIn, controllerOccurrence.save);
router.put('/ocurrences/:id', isLoggedIn, controllerOccurrence.deleteL);
router.delete('/ocurrences/:id', isLoggedIn, controllerOccurrence.deleteF);


router.get('/operations/', controllerOperation.read);
router.get('/operations/:id', controllerOperation.readID);
router.post('/operations/', isLoggedIn, controllerOperation.save);
router.put('/operations/:id', isLoggedIn, controllerOperation.deleteL);
router.delete('/operations/:id', isLoggedIn, controllerOperation.deleteF);

router.get('/partners/', controllerOperation.read);
router.get('/partners/:id', controllerOperation.readID);
router.post('/partners/', isLoggedIn, controllerOperation.save);
router.put('/partners/:id', isLoggedIn, controllerOperation.deleteL);
router.delete('/partners/:id', isLoggedIn, controllerOperation.deleteF);

router.get('/requests/', controllerOperation.read);
router.get('/requests/:id', controllerOperation.readID);
router.post('/requests/', isLoggedIn, controllerOperation.save);
router.put('/requests/:id', isLoggedIn, controllerOperation.deleteL);
router.delete('/requests/:id', isLoggedIn, controllerOperation.deleteF);



router.get('/conferences', controllerOperation.readConference);
router.get('/conferences/:id', controllerOperation.readConferenceID);

router.get('/conferences/:idconf/participants', controllerConference.readParticipant);
router.post('/conferences/:idconf/participants/:idparticipant/', controllerConference.saveParticipant);
router.delete('/conferences/:idconf/participants/:idparticipant', controllerConference.deleteParticipant);

router.get('/conferences/:idconf/sponsors/', controllerConference.readSponsor);
router.post('/conferences/:idconf/sponsors/:idsponsor', isLoggedIn, controllerConference.saveSponsor);
router.delete('/conferences/:idconf/sponsors/:idsponsor', isLoggedIn, controllerConference.deleteSponsor);

router.get('/conferences/:idconf/speakers/', controllerConference.readSpeaker);
router.post('/conferences/:idconf/speakers/:idspeaker', isLoggedIn, controllerConference.saveSpeaker);
router.delete('/conferences/:idconf/speakers/:idspeaker', controllerConference.deleteSpeaker);

router.post('/contacts/emails', controllerMail.send);
*/

router.get('/partners/', controllerPartner.readPartner);

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        /*  res.status(jsonMessages.login.unauthorized.status).send(jsonMessages.login.unauthorized);*/
        return next();
    }
}
