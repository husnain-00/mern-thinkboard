import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./Middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

//middleware
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());// this middleware wil parse JSON bodies: req.body
app.use(rateLimiter);
// //our simple custom middleware
// app.use((req, res, next) => {
//     console.log(`req method: ${req.method}, req URL: ${req.url}`);
//     next();
// });

app.use("/api/notes", noteRoutes);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on Port:", PORT);
    });
});
