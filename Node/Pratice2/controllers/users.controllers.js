const { data } = require("../users.json");
const validateGender = require("../validations/userQuery.validate");

const getUsers = (req, res) => {
  res.send("Welcome to User Page!");
};

const getUsersByGenderOrAge = (req, res) => {
  const { gender, age } = req.query;
  const { error } = validateGender.validate({ gender, age });
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
