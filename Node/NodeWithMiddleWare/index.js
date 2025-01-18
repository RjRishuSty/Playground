require('dotenv').config(); //emport env file
const express = require("express");
const app = express();
const port = 8082;
// TODO: middleware.
const verifyAutho = require('./middleware/authorzation');
const homeRouter = require("./routers/home.router");
const currencyRouter = require('./routers/currency.routers');
const usersRouter = require('./routers/users.routers');

app.use(verifyAutho) // This is middleware and you know if i have any request then you have middleware then first go to middle ware then router
// TODO: if in controller file i want to add middleware then => router.get('/', middlewarname, function)
app.use(homeRouter);
app.use("/currency",currencyRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
 