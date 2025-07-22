import mongoose from "mongoose";
const { Schema ,model } = mongoose;

const PaymentSchema = new Schema({
    name: {type: String, required: true},
    to_user: {type: String, required: true},
    orderId: {type: String, required: true},
    message: {type: String},
    amount: {type: Number, required: true}, 
    createdAt: {type: Date, required: true, default: Date.now},
    updatedAt: {type: Date, required: true, default: Date.now},
    Boolean: {type: Boolean, default: false}
});


export default mongoose.models.Payment || model("Payment", PaymentSchema);
 