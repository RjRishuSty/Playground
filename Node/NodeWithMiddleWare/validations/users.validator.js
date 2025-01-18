// TODO: Import the joi libraey
const Joi = require('joi');
const {validateGender} = require('../config/config');

// TODO: create Schema ..............
const usersSearchSchema = Joi.object({
    gender: Joi.string().valid(...validateGender),   //valid or allow both function do same things. you can pass array or object. means dono ma sa koi yak
    age: Joi.number().integer().min(1).max(100)
}).or("gender","age") // or means => any one is present then the schema work.....


module.exports = usersSearchSchema;
