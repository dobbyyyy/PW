const express = require('express');
const router = express.Router();
const fs = require("fs");
//let id=2;


router.get('/listAccusers',function(req,res){
	fs.readFile(__dirname+"/"+"accusers.json",'utf8',function(err,data){
		console.log(data);
		res.end(data);
	});
});

router.post('/addAccusers',function(req,res){
	fs.readFile(__dirname+"/"+"./accusers.json",'utf8',function(err,data){
		data = JSON.parse(data);
		var accuser_id = req.body.id;
		var Name = req.body.Name;
		var Email = req.body.Email;
		var Password = req.body.Password;
		var Address = req.body.Address;
		var Telephone = req.body.Telephone;
		var newAccuser = "accuser"+accuser_id;
		data[newAccuser] = {
			"id": accuser_id, "Name": Name, "Email": Email, "Password": Password, "Address": Address, "Telephone": Telephone
		};
		console.log(data);
		console.log(newAccuser);
		res.send(accuser_id+' '+Name+' '+Email+' '+Password+' '+Address+' '+Telephone+' ');
	});
});


router.delete('/deleteAccusers',function(req,res){
	fs.readFile(__dirname+"/"+"./accusers.json",'utf8',function(err,data){
		data = JSON.parse(data);
		delete data["accuser"+req.body.id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
});

router.get('/:id',function(req,res){
	fs.readFile(__dirname+"/"+"./accusers.json",'utf8',function(err,data){
		const accusers = JSON.parse(data);
		const accuser = accusers["accuser"+req.params.id]
		console.log(accuser)
		res.end(JSON.stringify(accuser));
	});
});


module.exports = router;