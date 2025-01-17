const { getUsers,getUsersByGenderOrAge } = require('../controller/users.controller');
const router = require('express').Router();

router.get('/', getUsers);
router.get('/search',getUsersByGenderOrAge);

module.exports = router; 