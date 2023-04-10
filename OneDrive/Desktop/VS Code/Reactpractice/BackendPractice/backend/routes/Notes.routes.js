const express = require("express");

const noteRouter = express.Router();
const {NoteModel} = require("../model/Note.model")

noteRouter.get("/", (req, res)=>{
    res.send("All Notes");
})

noteRouter.post("/create", async(req,res)=>{
    const payload = req.body;
    try {
        let note = new NoteModel(payload);
        await note.save();
        res.send({"msg":"New note created", "note":note});
    } catch (err) {
        res.send({"error":err.message});
    }
})

noteRouter.delete("/delete/:id", (req,res)=>{
    res.send("Deleted");
})

module.exports = {
    noteRouter
}