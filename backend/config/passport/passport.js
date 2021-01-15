var bcrypt = require('bcrypt-nodejs');
const jsonMessagesPath = __dirname+"/../../assets/jsonMessages/";
var jsonMessages = require(jsonMessagesPath+"login"); //msgs de login

module.exports = function(passport,user){
	var User=user;
	var LocalStrategy = require('passport-local').Strategy;
	passport.serializeUser(function(user,done){
		done(null,user.id);
	});
	passport.deserializeUser(function(user,done){
		User.findById(id).then(function(user){
		if(user){
			done(null,user.get());
		} else{
			done(user.errors,null);
		}
	});
	});
	passport.use('local-signup',new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req,email,password,done){
		var generateHash = function(password){
			return bCrypt.hashSync(password,bCrypt.genSaltSync(7),null);
	};
	User.findOne({where: {email:email}}).then(function(user){
		if(user){
			return done(null,false,jsonMessages.user.duplicate);
		} else{
			var userPassword = generateHash(password);
			var data ={
				email: email,
				password: userPassword,
				nome: req.body.firstname,
				apelido: req.body.lastname
			};
			User.create(data).then(function(newUser,created){
				if(!newUser){
					return done(null,false);
				}
				if(newUser){
					return done(null,newUser);
				}
			});
		}
	});
	}));
	//Sign-in
	passport.use('local-signin',new LocalStrategy({
		//default localstrategy function(username,password), override w/email
		usernameField: 'email',
		passwordField: 'password',
		pressReqToCallback: true
	},
	function(req,email,password,done){
		var User=user;
		var isValidPassword = function(userpass,password){
			return bCrypt.compareSync(password,userpass);
		}
		User.findOne({where:{email:email}}).then(function(user){
			if(!user){
				return done(null,false,jsonMessages.user.email); //msgs realtivas ao email
			}
			if(!isValidPassword(user.password,password)){
				return done(null,false,jsonMessages.user.password);
			}
			var userInfo = user.get();
			return done(null, userInfo);
		}).catch(function(err){
			console.log("Error: ", err);
			return done(null,false,jsonMessages.user.error);
		});
	}));
}