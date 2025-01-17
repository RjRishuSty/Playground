const { data } = require("../users.json");
const { validateGender } = require("../config/config");

const getUsers = (req, res) => {
  res.send("Welcome to Users Page");
};

const getUsersByGenderOrAge = (req, res) => {
  const { gender, age } = req.query;
  if (gender && !validateGender.includes(gender)) {
    res
      .status(400)
      .send({ message: `Please select any gender ex ${validateGender}` });
  }
  if ((age && isNaN(age)) || age < 1 || age > 100) {
    res.status(400).send(`Age must be number.`);
  }
  if (age && gender) {
    const filtered = data.filter(
      (item) => item.gender === gender && item.dob.age === Number(age)
    );
    res.send(filtered);
  } else if (age) {
    const filtered = data.filter((item) => item.dob.age === Number(age));
    res.send(filtered);
  } else if (gender) {
    const filtered = data.filter((item) => item.gender === gender);
    res.send(filtered);
  } else {
    res.status(400).send("Please Select any one gender or age");
  }
};

module.exports = { getUsers, getUsersByGenderOrAge };
