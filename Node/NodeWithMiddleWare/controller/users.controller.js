const { data } = require("../users.json");


const getUsers = (req, res) => {
  res.send(data);
};

const getUsersByGenderOrAge = (req, res) => {
  // with joi
  const { gender, age } = req.query;
 
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
