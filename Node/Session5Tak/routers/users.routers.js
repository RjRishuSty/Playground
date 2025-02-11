const router = require("express").Router();
const {
  getUsers,
  getUsersByGenderAndAge,
} = require("../controllers/users.controllers");

router.get("/", getUsers);
router.get("/search", getUsersByGenderAndAge);

module.exports = router;
