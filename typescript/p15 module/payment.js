// export function pay(val:number){
//     console.log(val);
// }
// export function donate(val:number){
//     console.log(val);
// }
//now exporting default class
export default class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    processPayment() {
        console.log(`Processing payment of ${this.amount}`);
    }
}
//# sourceMappingURL=payment.js.map