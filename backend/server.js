import express  from "express";
import notes from "./data/notes.js";
import dotenv from "dotenv"


const app = express();
dotenv.config();

app.get("/", (req,res) => {
    res.send("API is running successfully...")
});

app.get("/notes", (req,res) => {
    res.json(notes)
})

app.get("/notes/:id", (req,res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.json(note);
})

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`server starts on port ${PORT}`)); 
 