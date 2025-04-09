import mongoose from "mongoose";
import express from "express";
import {genData} from "./models/dummy.js";


let conn = await mongoose.connect("mongodb://localhost:27017/dummy")

const app = express();
const port = 3000
app.set('view engine','ejs'); 


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/generate", async (req, res) => {
    try {
        await genData();
        res.render("home", { message: "✅ 10 dummy records generated!" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
