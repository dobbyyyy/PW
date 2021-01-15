const express = require('express');
const router = express.Router();
const fs = require("fs");
//let id=2;


router.get('/listRequests',function(req,res){
	fs.readFile(__dirname+"/"+"requests.json",'utf8',function(err,data){
		console.log(data);
		res.end(data);
	});
});

router.post('/addRequest',function(req,res){
	fs.readFile(__dirname+"/"+"./requests.json",'utf8',function(err,data){
		data = JSON.parse(data);
		var req_id = req.body.id;
		var type = req.body.type;
		var state = req.body.state;
		var newRequest = "request"+req_id;
		data[newRequest] = {
			"id": req_id, "type": type, "state": state
		};
		console.log(data);
		console.log(newRequest);
		res.send(req_id+' '+type+' '+state+' ');
	});
});


router.delete('/deleteRequest',function(req,res){
	fs.readFile(__dirname+"/"+"./requests.json",'utf8',function(err,data){
		data = JSON.parse(data);
		delete data["request"+req.body.id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
});

router.get('/:id',function(req,res){
	fs.readFile(__dirname+"/"+"./requests.json",'utf8',function(err,data){
		const requests = JSON.parse(data);
		const request = requests["request"+req.params.id]
		console.log(request)
		res.end(JSON.stringify(request));
	});
});


module.exports = router;