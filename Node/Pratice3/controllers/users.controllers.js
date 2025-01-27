const users = require('../model/user.model');

const getUsers = (req, res)=>{
    res.send("Welcome to User Page!");
}

const createUser = async(req, res)=>{
    try{
        const newUser = await users.create(req.body);
        res.send(newUser);
    }catch(error){
        res.send("Somethings went wrong!", error);
    }
}

module.exports = {getUsers,createUser};