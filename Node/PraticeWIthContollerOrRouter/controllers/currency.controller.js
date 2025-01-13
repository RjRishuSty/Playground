const {data} = require('../currency.json');

const getCurrency = (req, res) => {
    console.log(data);
  res.send("Welcome to currency Page");
};

const getCurrencyBySymbol = (req, res)=>{
    const {symbol} = req.params;
    const filtered = data.find((item) => item.id === symbol.toUpperCase());
    res.send(filtered);
}

const getCurrencyBySize = (req, res)=>{
    const {min_size}= req.query;
    const filtered = data.filter((item)=>Number(item.min_size) === Number(min_size));
    res.send(filtered);
}
module.exports = { getCurrency,getCurrencyBySymbol,getCurrencyBySize };
