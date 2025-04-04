const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const router = express.Router()
const birds = require('./routes/blog')

// ...

app.use('/blog', birds)

router.use((req,res,next)=>{
    console.log('router middleware')
    next()

})

app.use(express.static("public"))

app.use((req,res,next)=>{
    console.log('m1')
    //res.send('hack') //this will stop the request
    next()//without this page contninue loads
})
app.use((req,res,next)=>{
    fs.writeFileSync('log.txt', `${Date.now()} ${req.method} ${req.url}\n`, {flag: 'a'})
    console.log(`m1`)
    req.aditya = 'aditya'
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!'+req.aditya)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//middle ware is a function that has access to the request object (req),
//  the response object (res),
//  and the next middleware function in the application’s request-response cycle.
//  The next middleware function is commonly denoted by a variable named next.
// middleware functions can perform the following tasks:
// - Execute any code.
// - Make changes to the request and the response objects.
// - End the request-response cycle.
// - Call the next middleware function in the stack.