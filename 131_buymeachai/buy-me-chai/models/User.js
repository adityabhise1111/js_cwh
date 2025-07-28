import mongoose from "mongoose";
const {Schema , model} = mongoose;

const UserSchema = new Schema({
    name: {type: String},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    profilePicture: {type: String},
    coverPicture: {type: String},
    razorpayId: {type: String},
    razorpaySecret: {type: String},
    createdAt: {type: Date, required: true, default: Date.now},
    updatedAt: {type: Date, required: true, default: Date.now}
});
export default mongoose.models.User || model("User", UserSchema); //here we are checking if the model already exists to avoid overwriting it
//if it exists, we use the existing model, otherwise we create a new one
//this is useful in development mode where the server restarts frequently and we don't want to redefine
