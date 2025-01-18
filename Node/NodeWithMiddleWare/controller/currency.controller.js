const {data} = require('../currency.json');

const getCurrency = (req, res) => {
  res.send(`Welcome to Currency Page`);
};

const getCurrencyBySize = (req, res)=>{
    const {min_size} = req.query;
    const filtered = data.filter((item)=> Number(item.min_size) === Number(min_size));
    res.send(filtered);
}
const getCurrencyById = (req, res)=>{
    const {id} = req.params;
    const filtered = data.find((item)=> item.id === id.toUpperCase());
    res.send(filtered);
}


module.exports = { getCurrency ,getCurrencyById,getCurrencyBySize};
