import mongoose from "mongoose";
import express from "express";
import {todo} from "./models/todo.js";
let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo1 = new todo({
        title: "Todo 1",
        description: "Todo 1 Description",
        completed: false,
    });
    todo1.save()
                .then(() => {
                    console.log("todo saved")
                })
                .catch((err) => {
                    console.log(errr)
                })

    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})