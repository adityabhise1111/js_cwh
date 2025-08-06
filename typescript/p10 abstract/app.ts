// abstract is the essential class for complex classes

class Animal {
    constructor( 
        public name: string, 
        public age: number , 
        public home: string,
        public species: string
    ) {}
}

class Cow extends Animal {
    constructor(
        name: string,
        age: number,
        home: string,
        species: string,
        public noOfHorn: number
    ) {
        super(name, age, home, species)
    }
}

// Example usage
let myCow = new Cow("Bessie", 5, "Farm", "Holstein", 2);
console.log(`Name: ${myCow.name}`);
console.log(`Age: ${myCow.age}`);
console.log(`Home: ${myCow.home}`);
console.log(`Species: ${myCow.species}`);
console.log(`Number of horns: ${myCow.noOfHorn}`);