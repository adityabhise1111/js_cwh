// export function pay(val:number){
//     console.log(val);
// }

// export function donate(val:number){
//     console.log(val);
// }

//now exporting default class

export default class Payment {
    constructor(private amount: number) {}

    processPayment() {
        console.log(`Processing payment of ${this.amount}`);
    }
}
