const router = require("express").Router();
const { getCurrency,getCurrencyById,getCurrencyBySize } = require("../controller/currency.controller");

router.get("/", getCurrency);
router.get('/search', getCurrencyBySize);
router.get('/:id', getCurrencyById);

module.exports = router;
