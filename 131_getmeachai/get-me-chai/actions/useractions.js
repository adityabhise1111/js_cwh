"use server"
import Razorpay from 'razorpay'
import Payment from '@/models/Payment'
import connectDb from '@/db/connectDB'
import User from '@/models/User'

export const initiatePayment = async ({amount, to_username, paymentform}) => {
    try {
        await connectDb()
        var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET })

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