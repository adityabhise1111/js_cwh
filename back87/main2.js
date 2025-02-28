import fs from "fs/promises"

let a= await fs.readFile("aditya2.txt")
let b= await fs.writeFile("aditya2.txt","hihihihih")
let c= await fs.appendFile("aditya2.txt","hello ")
console.log(a.toString())
