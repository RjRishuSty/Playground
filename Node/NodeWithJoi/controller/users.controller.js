const { data } = require("../users.json");
const usersSearchSchema = require("../validations/users.validator");
const password = "LetMeIn";

const getUsers = (req, res) => {
  if (req.headers.authorization !== process.env.password) return res.sendStatus(401);
  res.send(data);
};

const getUsersByGenderOrAge = (req, res) => {
  // with joi
  const { gender, age } = req.query;
  const { error } = usersSearchSchema.validate({ gender, age }); // validate inbuild function that return object {value,error} if no error then return nothings. if error then return error.
  if (error) return res.status(400).send({ message: error.details[0].message });
  if (age && gender) {
    const filtered = data.filter(
      (item) => item.dob.age === Number(age) && item.gender === gender
    );
    return res.send(filtered);
  } else if (age) {
    const filtered = data.filter((item) => item.dob.age === Number(age));
    return res.send(filtered);
  } else if (gender) {
    const filtered = data.filter((item) => item.gender === gender);
    return res.send(filtered);
  }
};

module.exports = { getUsers, getUsersByGenderOrAge };
