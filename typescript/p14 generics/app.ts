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