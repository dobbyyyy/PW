const express = require('express');
const router = express.Router();
const fs = require("fs");
//let id=2;


router.get('/listColaborators',function(req,res){
	fs.readFile(__dirname+"/"+"colaborators.json",'utf8',function(err,data){
		console.log(data);
		res.end(data);
	});
});

router.post('/addColaborators',function(req,res){
	fs.readFile(__dirname+"/"+"./colaborators.json",'utf8',function(err,data){
		data = JSON.parse(data);
		var idColaborator = req.body.idColaborator;
		var Name = req.body.Name;
		var Email = req.body.Email;
		var Password = req.body.Password;
		var Address = req.body.Address;
		var Telephone = req.body.Telephone;
		var newColaborator = "colaborator"+idColaborator;
		data[newColaborator] = {
			"idColaborator": idColaborator, 
			"Name": Name, 
			"Email": Email, 
			"Password": Password, 
			"Address": Address, 
			"Telephone": Telephone
		};
		console.log(data);
		console.log(newColaborator);
		res.send(idColaborator+' '+Name+' '+Email+' '+Password+' '+Address+' '+Telephone+' ');
	});
});


router.delete('/deleteColaborators',function(req,res){
	fs.readFile(__dirname+"/"+"./colaborators.json",'utf8',function(err,data){
		data = JSON.parse(data);
		delete data["colaborator"+req.body.idColaborator];
		console.log(data);
		res.end(JSON.stringify(data));
	})
});

router.get('/:id',function(req,res){
	fs.readFile(__dirname+"/"+"./colaborators.json",'utf8',function(err,data){
		const colaborators = JSON.parse(data);
		const colaborator = colaborators["colaborator"+req.params.id]
		console.log(colaborator)
		res.end(JSON.stringify(colaborator));
	});
});


module.exports = router;