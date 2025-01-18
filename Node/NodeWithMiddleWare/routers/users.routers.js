const {
  getUsers,
  getUsersByGenderOrAge,
} = require("../controller/users.controller");
const router = require("express").Router();
const {
  querySearchValidator,  //define version of function
  queryValidator, // pure function .......
} = require("../middleware/query.middleware");
const verifyAutho = require("../middleware/authorzation");
const usersSearchSchema = require("../validations/users.validator");

router.get("/", verifyAutho, getUsers);
router.get(
  "/search",
  verifyAutho,
  queryValidator(usersSearchSchema),
  getUsersByGenderOrAge
);

module.exports = router;
