const Joi = require("joi");
const usersGenderValidation = require("../config/userGender.validate");


const usersQuery = Joi.object({
  gender: Joi.string().valid(...usersGenderValidation),
  age: Joi.number().integer().min(1).max(100),
}).or("gender", "age");

module.exports = usersQuery;
