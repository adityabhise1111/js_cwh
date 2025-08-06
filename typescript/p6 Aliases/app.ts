//aliases

type udata = number | string | boolean;

function printUserData(data: udata): void {
    console.log(`User Data: ${data}`);
}

// Example usage
printUserData(42); // number
printUserData("Hello"); // string 
printUserData(true); // boolean

// union & intersection types




















    //union example
type User1 = {
    name: string;
    age: number;
};
type Admin1 = {
    admin: boolean;
};
type UserOrAdmin = User1 | Admin1;

function printUserInfo(user: UserOrAdmin): void {
    if ('admin' in user) {
        console.log(`Admin: ${user.admin}`);
    } else {
        console.log(`User: ${user.name}, Age: ${user.age}`);
    }
}

// Example usage
printUserInfo({ name: "Alice", age: 30 }); // User
printUserInfo({ admin: true }); // Admin
// intersection example
type User2 = {
    name: string;
    age: number;
};
type Admin2 = {
    admin: boolean;
};
type UserAndAdmin = User2 & Admin2;
function printUserAndAdminInfo(user: UserAndAdmin): void {
    console.log(`User: ${user.name}, Age: ${user.age}, Admin: ${user.admin}`);
}

// Example usage
printUserAndAdminInfo({ name: "Alice", age: 30, admin: true });


// keep this things in mind

    // type ancd = number ;
    // type ancd = string; // this will give error 
    //                     //as type is already defined
    // type ancd = number | string; // this is fine as it is a union type
    