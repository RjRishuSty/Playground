const router = require('express').Router();
const {getUsers,createNewUsers} = require('../controllers/users.controllers');

router.get('/', getUsers);
router.post('/new', createNewUsers);


module.exports = router;