import express  from "express"; 
import notes from "./data/notes.js";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";


const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is running successfully...")
});

app.get("/notes", (req,res) => {
    res.json(notes)
})

app.use("/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`server starts on port ${PORT}`)); 
    