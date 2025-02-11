const { data } = require("../users.json");
const usersQuery = require("../validation/users.query.validate");
const getUsers = (req, res) => {
  res.send(data);
};

const getUsersByGenderAndAge = (req, res) => {
  const { gender, age } = req.query;
  const { error } = usersQuery.validate({ gender, age });
  if (error) res.send(error.details[0].message);
  if (gender && age) {
    const filtered = data.filter(
      (item) => item.gender === gender && item.dob.age === Number(age)
    );
    res.send(filtered);
  } else if (gender) {
    const filtered = data.filter((item) => item.gender === gender);
    res.send(filtered);
  } else if (age) {
    const filtered = data.find((item) => item.dob.age === Number(age));
    res.send(filtered);
  }
};

module.exports = { getUsers, getUsersByGenderAndAge };
