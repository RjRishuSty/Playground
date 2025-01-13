const express = require('express');
const app = express();
const port = 8082;
const homeRouter = require('./routers/home.router');
const currencyRouter = require('./routers/currency.router');
app.use('/', homeRouter);
app.use('/currency', currencyRouter);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})