// type inference is nothing but auto detect type 
let a= 10 ; // inferred as number

//type annotation is explicitly declaring the type
let b: number | string | boolean; 
// here b can be number, string or boolean
b = 10;
b = "aditya";
b = true;

function add (x: number, y: number): void {
    console.log(x + y);
}