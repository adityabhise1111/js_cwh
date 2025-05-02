import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  googleId: { type: String }  // For Google OAuth users
});

const User = mongoose.model("User", UserSchema);

export { UserSchema, User }; // Ensure UserSchema is exported