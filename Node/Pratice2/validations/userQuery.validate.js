const Joi = require('joi');
const validateGender = require('../config/genderValidate');


const userQueryValidate = Joi.object({
    gender:Joi.string().valid(...validateGender),
    age:Joi.number().integer().min(1).max(100)
}).or("gender","age");

module.exports = userQueryValidate;