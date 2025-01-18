const usersSearchSchema = require("../validations/users.validator");

const querySearchValidator = (req, res, next) => {
  const { gender, age } = req.query;
  const { error } = usersSearchSchema.validate({ gender, age }); // validate inbuild function that return object {value,error} if no error then return nothings. if error then return error.
  if (error) return res.status(400).send({ message: error.details[0].message });
  next();
};

const queryValidator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    next();
  };
};

module.exports = { querySearchValidator, queryValidator };
