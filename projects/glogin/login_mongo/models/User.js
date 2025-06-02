import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
    }
);

export const User = mongoose.model('User', UserSchema);