const express = require("express");
const {UserModel} = require("../model/User.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/register", async (req,res)=>{
    const {name, email, password} = req.body;
    try {
        bcrypt.hash(password, 7, async function(err, hash) {
            if(err){
                res.send({"msg":"Something went Wrong", "error":err.message});
            }
            else{
                const user = new UserModel({name, email, password:hash});
                await user.save();
                res.send({"msg":"New User has been Registered"});
            }
        });
    } catch (err) {
        res.send({"msg":"Something went Wrong", "error":err.message})
    }
})

userRouter.post("/login", async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await UserModel.find({email});
        if(user.length>0){
            bcrypt.compare(password, user[0].password, function(err, result) {
                if(result){
                    let token = jwt.sign({ userID: user[0]._id }, 'masai');
                    res.send({"msg":"LogIn successful", "token":token});
                }
                else{
                    res.send({"msg":"Wrong Credentials"});
                }
            });
            
        }
        else{
            res.send({"msg":"Wrong Credentials"});
        }
    }catch(err){
        res.send({"msg":"Something went Wrong", "error":err.message})
    }
    
})

module.exports = {
    userRouter
}