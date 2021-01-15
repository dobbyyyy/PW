const express = require('express');
const router = express.Router();
const fs = require("fs");
//let id=2;


router.get('/listPartners',function(req,res){
	fs.readFile(__dirname+"/"+"partners.json",'utf8',function(err,data){
		console.log(data);
		res.end(data);
	});
});

router.post('/addPartners',function(req,res){
	fs.readFile(__dirname+"/"+"./partners.json",'utf8',function(err,data){
		data = JSON.parse(data);
		var partner_id = req.body.id;
		var Name = req.body.Name;
		var Email = req.body.Email;
		var Telephone = req.body.Telephone;
		var Address = req.body.Address;
		var newPartner = "partner"+partner_id;
		data[newPartner] = {
			"id": partner_id, "Name": Name, "Email": Email, "Telephone": Telephone, "Address": Address
		};
		console.log(data);
		console.log(newPartner);
		res.send(partner_id+' '+Name+' '+Email+' '+Telephone+' '+Address+' ');
	});
});


router.delete('/deletePartners',function(req,res){
	fs.readFile(__dirname+"/"+"./partners.json",'utf8',function(err,data){
		data = JSON.parse(data);
		delete data["partner"+req.body.id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
});

router.get('/:id',function(req,res){
	fs.readFile(__dirname+"/"+"./partners.json",'utf8',function(err,data){
		const partners = JSON.parse(data);
		const partner = partners["partner"+req.params.id]
		console.log(partner)
		res.end(JSON.stringify(partner));
	});
});


module.exports = router;