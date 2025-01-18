const express = require("express");

// TODO: importing .env file ..........
require('dotenv').config()  //very important 

// TODO: importing db connection file
const connectDB = require("./db/config");

// TODO: Importing router file
const blogRouters = require('./routers/blog.router');
const app = express();
const port = 8082;
// TODO: add post data for json
app.use(express.json());

// TODO: Calling the DB connection function
connectDB();

app.use('/blog',blogRouters);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
