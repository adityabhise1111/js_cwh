// import { pay, donate } from './payment.js';
import Payment from './payment.js';

// Using the imported functions
// pay(1000);
// donate(500);

const payment = new Payment(1000);
payment.processPayment();

console.log("Payment processing completed!");
