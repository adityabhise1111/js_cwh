const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res)=>{
    res.sendFile('templates/index.html',{root:__dirname})
})

app.post('/', (req, res) => {
    console.log("consoling in post")
    res.send('Hello responding in post!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})