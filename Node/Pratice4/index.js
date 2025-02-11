require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const usersRouters = require('./routers/users.routers');
const connectDB = require('./db/config');

connectDB();
app.use(express.json())
app.use('/users', usersRouters);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})