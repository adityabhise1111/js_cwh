//generic functions
function display(a) {
    console.log(a);
}
display("aditya");
display(1000);
display(100); // this also works ts infers type auto
function cook(food) {
    console.log("we are making "
        + food.name + " by this "
        + food.recipe);
}
cook({ name: "maggie", recipe: "method" });
//class
var factory = /** @class */ (function () {
    function factory(machine) {
        this.machine = machine;
    }
    return factory;
}());
var food = new factory("FOOD factory");
var mobile = new factory(7003);
console.log(food, mobile);
