import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
    }
);

export const todo = mongoose.model('todo', todoSchema);