require('dotenv').config();
const express = require('express');
const connectDB = require('./db/config');
const usersRouter = require('./routers/users.routers');
const app = express();
const port = 8082;

connectDB();

app.use(express.json());
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})