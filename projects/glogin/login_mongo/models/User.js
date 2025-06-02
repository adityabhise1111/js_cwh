import mongoose from "mongoose";

<<<<<<< HEAD
const UserSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
    }
);

export const User = mongoose.model('User', UserSchema);
=======
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

export { UserSchema, User }; // Ensure UserSchema is exported
>>>>>>> 593aef38c527c0ae741059a541b3184dd327fa99
