const express = require('express');
const connectDB = require('./db/config');

const app = express();
const port = 8082;
connectDB();
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});