//static are can be called without being initialized 

class App {
    static version : number = 1;
    static rand() : number {
        return Math.random();
    }
}

console.log(App.version); // we access version without creating an instance
console.log(App.rand()); // we can call static methods
//  without creating an instance

