"use server"
import Razorpay from 'razorpay'
import Payment from '@/models/Payment'
import connectDb from '@/db/connectDB'
import User from '@/models/User'

export const initiatePayment = async ({ amount, to_username, paymentform }) => {
    try {
        await connectDb()
        var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET })

        console.log("to_username:", to_username)

        let options = {
            amount: Number(amount) * 100, // amount in the smallest currency unit
            currency: "INR",
        }

        let x = await instance.orders.create(options)

        await Payment.create({
            orderId: x.id,
            amount: amount,
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message,
        })

        return x
    } catch (error) {
        console.error("Error in initiatePayment:", error)
        throw new Error(`Payment initiation failed: ${error.message}`)
    }
}

export const fetchUser = async (username) => {
    try {
        await connectDb()
        let udata = await User.findOne({ username: username })
        let user;
        if (udata) {
            //user = udata.toObject({flattenObjectIds: true})
            user = JSON.parse(JSON.stringify(udata.toObject()))
        } else {
            throw new Error("User not found udata is null")
        }
        return user
    } catch (error) {
        console.error("Error in fetchUser:", error)
        throw new Error(`User fetching failed: ${error.message}`)
    }
}

export const fetchDonePayments = async (username) => {
    try {
        await connectDb()

        // Fetch the payment details based on the username 
        // and sort by amount in descending order
        // and lean to get a plain JavaScript object
        let payments = await Payment.find({ to_user: username, done: true })
            .sort({ amount: -1 })
            .lean();

        return JSON.parse(JSON.stringify(payments));

    } catch (error) {
        console.error("Error in fetchPayment:", error)
        throw new Error(`Payment fetching failed: ${error.message}`)
    }
}

export const updateProfile = async (data, oldUsername) => {
    await connectDb()
    try{
        let newdata = data

        if (newdata.username !== oldUsername) {
            // Check if the new username already exists
            let existingUser = await User.findOne({ username: newdata.username })
            if (existingUser) {
                throw new Error("Username already exists")
            }
        }

        await User.updateOne({email: newdata.email}, newdata)
    }catch (error) {
        console.error("Error in updateProfile:", error)
        throw new Error(`Profile update failed: ${error.message}`)
    }
}