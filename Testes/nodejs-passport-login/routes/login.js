const express = require('express')
const router = express.Router();
const passport = require('passport');

//Get login page
router.get('/', (req,res,next)=>{
	if(req.query.fail)
		res.render('login',{title: 'Login', message: 'Usuario e/ou senha inválidos'});
	else
		res.render('login',{message: null});
});

//Post login page
router.post('/', passport.authenticate('local',{
	sucessRedirect: '/',
	failureRedirect: '/login?fail=true'
}));

module.exports = router;