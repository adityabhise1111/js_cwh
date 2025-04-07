  use("crudDb")
//  db.createCollection("sigma")

// db.sigma.insertOne({
//     name: "sigma",
//     age: 20,
//     gender: "male",
//     occupation: "student"
// })

// db.sigma.insertMany([
//     {
//         name: "sigma2",
//         age: 21,
//         gender: "female",
//         occupation: "student"
//     },
//     {
//         name: "sigma3",

//         age: 22,
//         gender: "male",
//         occupation: "student"
//     },
//     {
//         name: "sigma4",
//         age: 23,
//         gender: "female",
//         occupation: "student"
//     },
//     ])

//     let a = await db.sigma.find({ age: 23 })
// //    let a = db.sigma.findOne({ age: 23 })
// //    console.log(a)
//     console.log(a.toArray())

//update
    //db.sigma.updateMany({ age:23}, { $set: { age: 100 } })
    // let b =  db.sigma.find({ age: 100 })
    // console.log(b.toArray())


//delete
db.sigma.deleteMany({ age: 100 })
let c = db.sigma.find({ age: 100 })  
console.log(c)


db.sigma.insertOne({ age: 100 })

c = db.sigma.find({ age: 100 })  
console.log(c)