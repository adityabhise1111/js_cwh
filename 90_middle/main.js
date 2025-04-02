const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.use((req,res,next)=>{
    console.log('m1')
    next()//without this page contninue loads
})
app.use((req,res,next)=>{
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})