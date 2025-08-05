
//interface

interface User {
    name: string;
    age :number;
    
}
interface User {
   
    gender?:string;
    email: string;
}// interfaces with same name can be merged

function createUser(user:User): void{
    console.log(`User Created: ${user.name}, Age: ${user.age}, Gender: ${user.gender}, Email: ${user.email}`);
}

createUser({
    name: "John Doe",
    age: 30,
    gender : "Male",
    email: "john.doe@example.com"
});

// interface is the type of the object

//extending interface

interface Admin extends User {
    admin : boolean;
    permissions: string[];
}

function createAdmin(admin: Admin): void {
    console.log(`Admin Created: ${admin.name},
        Age: ${admin.age}, 
        Gender: ${admin.gender}, 
        Email: ${admin.email}, 
        Admin: ${admin.admin}, 
        Permissions: ${admin.permissions.join(", ")}`);
        admin.
}

//interface extends basically means that
//  the Admin interface inherits all properties from the 
// User interface, while also adding its own specific
//  properties.

