const express = require("express");
const {connection} = require("./db");
const {userRouter} = require("./routes/User.routes");
const {noteRouter} = require("./routes/Notes.routes");
const {authenticate} = require("./middleware/authenticate.middleware");


const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("HOME PAGE");
})

app.use("/users", userRouter);
app.use(authenticate);
app.use("/notes", noteRouter);

app.listen(8080, async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log(err.message);
    }
    console.log("Server running on Port 8080");
})