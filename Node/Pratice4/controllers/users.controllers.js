const userModel = require("../model/users.model");
const getUsers = (req, res) => {
  res.send("welcome to users Page");
};

const createNewUsers = (req, res) => {
  const newUser = new userModel(req.body);
  console.log(newUser);
};

module.exports = { getUsers, createNewUsers };
