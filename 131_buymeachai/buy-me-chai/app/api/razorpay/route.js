import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDB";
import User from "@/models/User";

export const POST = async (request) => {
    try {
        await connectDb();
        let body = await request.formData();
        body = Object.fromEntries(body);

        console.log('Received payment data:', body); // Debug log
        console.log('Environment check:', {
            hasRazorpaySecret: !!process.env.RAZORPAY_SECRET,
            hasNextAuthUrl: !!process.env.NEXTAUTH_URL
        });

        //check if the payment is valid
        let p = await Payment.findOne({ orderId: body.razorpay_order_id });
        if (!p) {
            return NextResponse.json({ success: false, message: "Order Id not found" })
        }

        // fetch the secret of the user who is getting the payment 
        let user = await User.findOne({ username: p.to_user })
        const secret = user.razorpaysecret

        //verify the payment
        let isValid = validatePaymentVerification(
            {
                "order_id": body.razorpay_order_id,
                "payment_id": body.razorpay_payment_id
            },
            body.razorpay_signature,
            process.env.RAZORPAY_SECRET
        );

        console.log('Payment verification result:', isValid); // Debug log

        if (isValid) {
            console.log('Payment verified, updating database...'); // Debug log
            const updatedPayment = await Payment.findOneAndUpdate(
                { orderId: body.razorpay_order_id },
                { done: true },
                { new: true }
            );
            console.log('Updated payment:', updatedPayment); // Debug log

            const redirectUrl = `${process.env.NEXTAUTH_URL}/${updatedPayment.to_user}?paymentdone=true`;
            console.log('Redirect URL:', redirectUrl); // Debug log

            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`);
        }
        else {
            return NextResponse.json({
                success: false,
                error: "Payment verification failed"
            }, { status: 400 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            error: "Internal server error: " + error.message
        }, { status: 500 });
    }
}