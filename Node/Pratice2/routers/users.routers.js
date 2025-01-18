const router = require('express').Router();
const {getUsers,getUsersByGenderOrAge} = require('../controllers/users.controllers');


router.get('/', getUsers);
router.get('/search', getUsersByGenderOrAge);

module.exports = router;