const router = require("express").Router();
const {
  getCurrency,
  getCurrencyBySymbol,
  getCurrencyBySize
} = require("../controllers/currency.controller");

router.get("", getCurrency);
router.get('/search',getCurrencyBySize);
router.get("/search/:symbol", getCurrencyBySymbol);

module.exports = router;
