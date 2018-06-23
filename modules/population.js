const mongoose  = require('mongoose');
const error 	 = require('./error');
const popModel = require('../model/populationModel');
const request  = require('request'); 




module.exports = function(app){

//API to fetch data	
	app.get('/api/getAllCityName', function(req,res,next){  
		popModel.find({}, function(err, result){
			if(err) return next(err);
			res.json({'status':200, 'data':result});
		});
	},error);

//API to fetch data	
	app.get('/api/population/:id', function(req,res,next){ 
		if(!req.params.id)
			return next({'status':405, 'message':'Insufficiant Data'});
		popModel.findOne({_id:req.params.id}, function(err, result){
			if(err) return next(err);
			res.json({'status':200, 'data':result});
		});
	},error);


//API to insert data
	app.post('/api/population', function(req,res,next){
		var bodyData = req.body || {};
		if(!bodyData.year || !bodyData.population || !bodyData.city_name)
				return next({'status':405, 'message':'Insufficiant Data'});

		var newPopData = new popModel(bodyData);
		newPopData.save(function(err, data){
			if(err) return next(err);
			res.json({'status':200, 'message':'Data Saved Successfully'});
		})
	},error);

// Github External 
	app.get('/api/github', function(req,res,next){
		let options = {
			url:'https://api.github.com/users/github ',
			method:'GET',
			headers:{
				'User-Agent':'Chrome',
				'content-type' : 'application/json',
			}
		}; 
		 request(options, function(err, resp, body){ 
		    if(err || resp.statusCode !==200) {
		     	return next({message:'Some error occured'});
		    } 
		    res.json({data:JSON.parse(body)}) 
		  });
	},error)

// json External 
	app.get('/api/dummyJson', function(req,res,next){
		let options = {
			url:'https://jsonplaceholder.typicode.com/posts/1 ',
			method:'GET',
			headers:{
				'User-Agent':'Chrome',
				'content-type' : 'application/json',
			}
		}; 
		 request(options, function(err, resp, body){ 
		    if(err || resp.statusCode !==200) {
		     	return next({message:'Some error occured'});
		    } 
		    res.json({data:JSON.parse(body)}) 
		  });
	},error)

}