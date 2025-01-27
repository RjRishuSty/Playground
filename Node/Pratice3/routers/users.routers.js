const router = require('express').Router();
const {getUsers,createUser} = require('../controllers/users.controllers');

router.get('/', getUsers);
router.post('/new',createUser);

module.exports = router;