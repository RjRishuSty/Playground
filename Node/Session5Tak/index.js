require("dotenv").config();
const express = require("express");
const usersRouter = require("./routers/users.routers");
const blogsRouter = require('./routers/blogs.routers');
const connectDB = require('./db/config');
const app = express();
const port = 3000;

connectDB();
app.use("/user", usersRouter);
app.use('/blog', blogsRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
 