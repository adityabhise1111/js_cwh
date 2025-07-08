const { error } = require("console");
const fs = require("fs")
console.log(fs);
console.log("starting");

// fs.writeFileSync("aditya.txt","aditya bhise")
fs.writeFile("aditya2.txt","async",()=>{
    console.log("done");
    fs.readFile("aditya2.txt",(error,data)=>{
        console.log(error,data.toString)
    })
})
fs.appendFile("aditya2.txt","appneding aditya",(e,d)=>{
    console.log(d)
})
    
console.log("ending");