let a:any = 12;

<number> a; // type assertion
(<number> a).toFixed(2); // type assertion with method call
// after assertion ts works and intellisense works


let b= Number("12");

console.log(typeof b); // number


//non null assertion operator !

let c: string | null = "Hello";
let d: string = c!; // non-null assertion, tells TypeScript that c is not null
//rarely used, use with caution
// TypeScript will not throw an error here
console.log(d); // "Hello"
