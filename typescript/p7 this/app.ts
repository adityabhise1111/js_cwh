class car {
    brand :string = "Range Rover";
    changeName(newName: string) {
        this.brand = newName;
    }   
}

class bike {
    
    constructor(private brand: String) {} 
    
    changeName(newName: string) {
        this.brand = newName;
    }
}

let bmw = new car();
bmw.changeName("M-Series");

let splendor = new bike("Honda");
splendor.changeName("Splendor Pro");

splendor.brand = "Splendor Pro Classic"; 
// This line will cause an error if strict mode is enabled
console.log(bmw.brand); // Output: M-Series
console.log(splendor.brand); // Output: Splendor Pro Classic even its private
// This line will cause an error if strict mode is enabled
// but now it will not cause an error
// this is problem in ts 
// it checks only at compile time
// but not at runtime so that it should not create problem to user
// // but it will create problem to developer
