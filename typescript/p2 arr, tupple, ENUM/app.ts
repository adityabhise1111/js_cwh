//basic types of ts
// *premitive types(string, number, boolean, null, undefined, symbol)
// *Arrays 
// *Tuples
// *Enums
// *Any unknown void null undefined never 
 
// example of premitives are
let naME : string = "John";
let age: number = 30;
let isStudent: boolean = true;

// example of reference types are
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];





let arr = [1,2,3 , "harsh", { name : "adiyta"}, {name:1000}]  //works but not ideal 

let arr2 : number[] = [1,2,3] //now it errors for other data types

//tupple

let arr3 :[number,string] = [10 , "ben"];

//enum 

enum useRoles {
    Admin ="admin",
    User = " user",

}