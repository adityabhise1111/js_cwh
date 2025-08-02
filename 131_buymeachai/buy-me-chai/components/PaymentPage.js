"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiatePayment ,fetchDonePayments, fetchUser, findNumberofUsers } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { set } from 'mongoose'


const PaymentPage = ({ username }) => {

    const [paymentform, setPaymentForm] = useState({
        name: '',
        message: '',
        amount: ''
    });
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const [userscount, setuserscount] = useState(0)

    useEffect(() => {
      getData(username)
      numberOfUsers()
    }, [username])


    const handleChange = (e) => {
        setPaymentForm({
            ...paymentform,
            [e.target.name]: e.target.value
        });
    }

    const numberOfUsers = async () => {
        try {
            let count = await findNumberofUsers()
            if (count){
                setuserscount(count)
            }
        }catch (error) {
            console.error("Error fetching user count:", error);
        }

    }

    const getData = async (username) => {
        try {
            let u = await fetchUser(username)
            if(u){ setcurrentUser(u) }else {throw new Error("User not found")}
            // console.log("Current User:", u); // Debug log

            let p = await fetchDonePayments(username)
            if(p){ setpayments(p) }else {throw new Error("Payments not found")}
            // console.log("Payments:", p); // Debug log
        } catch (error) {
            // console.error("Error fetching user data:", error);
        }
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
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay/`, //This is the URL where you want to redirect after payment
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

                //  "handler": function (response) {
                //     // Payment successful
                //     alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                // },

                // "handler": async function (response) {
                //     try {
                        
                //         // Call your API to verify payment and get redirect URL
                //         const verificationResponse = await fetch('/api/razorpay', {
                //             method: 'POST',
                //             headers: {
                //                 'Content-Type': 'application/json',
                //             },
                //             body: JSON.stringify({
                //                 razorpay_order_id: response.razorpay_order_id,
                //                 razorpay_payment_id: response.razorpay_payment_id,
                //                 razorpay_signature: response.razorpay_signature,
                                
                //             }),
                //         });

                //         // Check if response is ok before parsing JSON
                //         if (!verificationResponse.ok) {
                //             throw new Error(`API Error: ${verificationResponse.status} ${verificationResponse.statusText}`);
                //         }

                //         const result = await verificationResponse.json();
                //         console.log('API Response:', result); // Debug log

                //         if (result.success && result.redirect) {
                //             // This will redirect to the URL with paymentdone=true
                //             window.location.href = result.redirect;
                //         } else {
                //             alert('Payment verification failed: ' + (result.message || 'Unknown error'));
                //         }
                //     } catch (error) {
                //         console.error('Error verifying payment:', error);
                //         alert('Payment verification failed: ' + error.message);
                //     }
                // },
                // "modal": {
                //     "ondismiss": function () {
                //         // Payment modal closed
                //         console.log("Payment modal closed");
                //     }
                // }
            }

            if (typeof Razorpay === 'undefined') {
                throw new Error("Razorpay SDK not loaded. Please refresh the page and try again.");
            }

            var rzp1 = new Razorpay(options);
            rzp1.open();

        } catch (error) {
            // console.error("Payment error:", error);
            alert(`Payment failed: ${error.message}`);
        }
    }

    return (
        <>

            {/* <button id="rzp-button1">Pay</button> */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full relative'>
                {/* {username} */}
                <img className='object-cover w-full h-[200px] md:h-[250px]'
                    src={currentUser.coverPicture}
                    alt="coverPicture" />
                <div className="absolute -bottom-12 md:-bottom-14 left-1/2 transform -translate-x-1/2 p-[4px] md:p-[6px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.6)] ring-2 ring-white">
                    <div className="rounded-full bg-black p-[2px]">
                        <img
                            className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover border-2 md:border-4 border-white"
                            src={currentUser.profilePicture}
                            alt="User profile"
                        />
                    </div>
                </div>

            </div>
            <div className="info flex flex-col justify-center items-center my-16 md:my-24 gap-3 px-4">
                <div className="font-bold text-lg md:text-xl">@{username}</div>
                <div className='text-slate-400 text-center'>Lets help {username} to buy chai</div>
                <div className='text-center text-sm md:text-base'>
                    {payments.length} Members . Raised ₹{payments.reduce((acc, payment) => acc + payment.amount, 0)}
                </div>
                <div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200">
                        Support
                    </button>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mt-5 w-full p-4 md:p-10 max-w-7xl'>
                    <div className='text-base md:text-lg w-full lg:w-1/2 bg-slate-900 rounded-lg text-white p-6 md:p-10'>
                        <h3 className='text-lg md:text-xl font-bold mb-4'>Recent Supporters</h3>
                        <ul className='max-h-80 overflow-y-auto'>
                            {payments.map((payment) => (
                                <li key={payment._id} className='my-4 flex items-start gap-3'>
                                    <img src="user.gif" className='flex-shrink-0' width={40} height={40} alt="user icon" />
                                    <div className='flex-1 text-sm md:text-base'>
                                        <span className='font-semibold'>{payment.name}</span> donated ₹{payment.amount} with message: "{payment.message}"
                                    </div>
                                </li>
                                
                            ))}
                            
                            
                        </ul>

                    </div>
                    <div className='w-full lg:w-1/2 bg-slate-900 rounded-lg text-white p-6 md:p-10'>
                        <h2 className='text-xl md:text-2xl font-bold my-5'>Make A Payment</h2>
                        <div className="flex flex-col gap-3">
                            <input onChange={handleChange} name='name' value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800 text-sm md:text-base' placeholder='Enter Name' />
                            <input onChange={handleChange} name='message' value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800 text-sm md:text-base' placeholder='Enter Message' />
                            <input onChange={handleChange} name='amount' value={paymentform.amount}  type="text" className='w-full p-3 rounded-lg bg-slate-800 text-sm md:text-base' placeholder='Enter Amount' />
                            <button onClick={() => { pay(paymentform.amount) }}  className='w-full md:w-fit bg-indigo-600 text-white px-4 py-3 rounded hover:bg-indigo-700 transition-colors duration-200 disabled:bg-indigo-400 text-sm md:text-base' disabled={!paymentform.name || !paymentform.message || !paymentform.amount}>Pay</button>
                            <div className="flex flex-wrap gap-2 mt-5">
                                <button onClick={() => { pay(10) }} className='flex-1 md:flex-none bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 text-sm md:text-base'>
                                    Pay ₹10
                                </button>
                                <button onClick={() => { pay(20) }} className='flex-1 md:flex-none bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 text-sm md:text-base'>
                                    Pay ₹20
                                </button>
                                <button onClick={() => { pay(30) }} className='flex-1 md:flex-none bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 text-sm md:text-base'>
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