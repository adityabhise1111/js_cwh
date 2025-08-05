let a :unknown;
a=12; 
a= "aditya"
if(typeof a === "string"){

    a.toUpperCase()
}


//that means any types say 
// do whatever you want im quite
//and if unknowns it say
//  ok when will you assin check type first


//functions 

//functions 

function abcd (): void {
    console.log("aditya");
    //return "adita";
}

function abc (): string {
    console.log("aditya");
    return "adita";
}

function ab (): number {
    console.log("aditya");
    return 10 ;
}

//must name the return type of the function like cpp


//unknown 

let b :unknown;
b = 12;
b = "aditya";
if(typeof b === "string"){

    b.toUpperCase()
}


//that means any types say
// do whatever you want im quite
//and if unknowns it say
//  ok when will you assin check type first



//never 

function errorFunction(): never {
    throw new Error("This function always throws an error");
}

errorFunction(); // This will never return,
//  it always throws an error
console.log("This line will never be reached");
// This line will never be executed