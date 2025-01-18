require('dotenv').config();
const express = require('express');
const blogsRouters = require('./routers/blogs.routers');
const usersRouter = require('./routers/users.routers');
const connectDB = require('./db/config');
const app = express();
const port = 8082;
connectDB();
app.use(express.json());


app.use("/blogs", blogsRouters);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})