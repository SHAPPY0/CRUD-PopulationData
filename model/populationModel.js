'use strict';
const db = require('../config/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var populationModelSchema = new Schema({
	city_name:{
		type:String
	},
    year:{
    	type:Number
    }, 
    population:{
    	type:Number
    }, 
    metadata:{
    	create_at:{type:Date}
    }
}); 

populationModelSchema.pre('save', function(next) { 
    var currentDate = new Date(); 
    this.metadata.created_at = currentDate; 
    next();
});

module.exports = db.mongoose.model('city_population', populationModelSchema);