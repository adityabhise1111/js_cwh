"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiatePayment } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {

    const [paymentform, setPaymentForm] = useState({
        name: '',
        message: '',
        amount: ''
    });


    const handleChange = (e) => {
        setPaymentForm({
            ...paymentform,
            [e.target.name]: e.target.value
        });
    }

    const pay = async (amount) => {
        try {
            // Validate amount
            if (!amount || amount <= 0) {
                alert("Please enter a valid amount");
                return;
            }

            // Validate form data
            if (!paymentform.name.trim()) {
                alert("Please enter your name");
                return;
            }

            let a = await initiatePayment({ amount, to_username: username, paymentform });
            
            if (!a || !a.id) {
                throw new Error("Failed to create payment order");
            }
            
            let orderId = a.id;

            var options = {
                "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                "amount": amount * 100, // Amount is in currency subunits (paise)
                "currency": "INR",
                "name": "Chai Corp", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, // This is a sample Order ID. Pass the id obtained in the response of Step 1
                "callback_url": `${process.env.URL}/api/razorpay/`, //This is the URL where you want to redirect after payment
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": paymentform.name, //use actual customer's name from form
                    "email": "aditya@example.com",
                    "contact": "9999999999" //Provide the customer's phone number for better conversion rates
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                },
                "handler": function (response) {
                    // Payment successful
                    alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                },
                "modal": {
                    "ondismiss": function() {
                        // Payment modal closed
                        console.log("Payment modal closed");
                    }
                }
            }
            
            if (typeof Razorpay === 'undefined') {
                throw new Error("Razorpay SDK not loaded. Please refresh the page and try again.");
            }
            
            var rzp1 = new Razorpay(options);
            rzp1.open();

        } catch (error) {
            console.error("Payment error:", error);
            alert(`Payment failed: ${error.message}`);
        }
    }

    return (
        <>

            <button id="rzp-button1">Pay</button>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full  relative '>
                {username}
                <img className='object-cover w-full h-[250px]'
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8289103/46bf2753989b49ec97a9339d21f39c18/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/1.jpg?token-hash=Umd3b9tkkP9OUg_b3SFZUtAd8btLm_Vesy7NKum7kB4%3D&amp;token-time=1754265600"
                    alt="" />
                <div className="absolute -bottom-14 right-[46.5%] p-[6px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.6)] ring-2 ring-white">
                    <div className="rounded-full bg-black p-[2px]">
                        <img
                            className="rounded-full w-[100px] h-[100px] object-cover border-4 border-white"
                            src="dogesh.jpeg"
                            alt="User profile"
                        />
                    </div>
                </div>

            </div>
            <div className="info flex flex-col justify-center items-center my-24 gap-3">
                <div className="font-bold text-lg">@{username}</div>
                <div className='text-slate-400'>Creating animated content for Ott</div>
                <div>
                    9,775 Members . 82 Post . $15,000 Raised
                </div>
                <div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200">
                        Support
                    </button>
                </div>
                <div className='flex gap-5 mt-5 w-full p-10'>
                    <div className='text-lg makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <ul>
                            <li className='my-2 flex items-center gap-2 my-5'>
                                <img src="user.gif" className='' width={40} height={40} alt="user icon" />
                                Shubham donated $10
                            </li>
                            <li className='my-2 flex items-center gap-2 my-5'>
                                <img src="user.gif" className='' width={40} height={40} alt="user icon" />
                                Shubham donated $10
                            </li>
                            <li className='my-2 flex items-center gap-2 my-5'>
                                <img src="user.gif" className='' width={40} height={40} alt="user icon" />
                                Shubham donated $10
                            </li>
                            <li className='my-2 flex items-center gap-2 my-5'>
                                <img src="user.gif" className='' width={40} height={40} alt="user icon" />
                                Shubham donated $10
                            </li>
                            <li className='my-2 flex items-center gap-2 my-5'>
                                <img src="user.gif" className='' width={40} height={40} alt="user icon" />
                                Shubham donated $10
                            </li>
                        </ul>

                    </div>
                    <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <h2 className='2-xl font-bold my-5 '>Make A Payment</h2>
                        <div className="flex flex-col gap-2">
                            <input onChange={handleChange} name='name' value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} name='message' value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} name='amount' value={paymentform.amount} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button className=' w-fit bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200'>Pay</button>
                            <div className="flex gap-2 mt-5">
                                <button onClick={() => { pay(10) }} className='bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200'>
                                    Pay ₹10
                                </button>
                                <button onClick={() => { pay(20) }} className='bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200'>
                                    Pay ₹20
                                </button>
                                <button onClick={() => { pay(30) }} className='bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200'>
                                    Pay ₹30
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentPage