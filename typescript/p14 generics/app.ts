//generic functions
function  display<T>(a:T){
    console.log(a);
}

display<string>("aditya");
display<number>(1000);
display(100);// this also works ts infers type auto

//generic interfac
interface noodles<T>{
    name:string;
    recipe:T;
}
function cook(food:noodles<string>){
    console.log("we are making "
        +food.name+" by this "
        +food.recipe);   
}
cook({name:"maggie",recipe:"method"});



//class

class factory<T>{
    constructor(public machine :T){}
}

let food = new factory<string>("FOOD factory");
let mobile = new factory<number>(7003);

console.log(food, mobile);



// imporrtant catch 

function imp<T>(a:T,b:T):T{
    //return a
    //return b
    //return a+b 
    if(typeof a==="string"){
        console.log(a.charAt(0)); 
        //now intellisense will work
    }
    //return "aditya" dont work
    // ts takes it as string literal not string 
    return "aditya" as T; //solution 
    return <T>"bhise" ; // also work

}

imp<string>("aditya","bhise");