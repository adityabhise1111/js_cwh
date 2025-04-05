const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs'); 

app.get('/', (req, res) => {
  let name= "aditya"
  let text= "awesome"
  let arr= ["aditya", "bhise", "awesome"]
  res.render("index" ,{ name:name, search : text ,arr})
})
app.get('/blog/:slug', (req, res) => {
  let name= "aditya bhise"
  let text= "awesome engineer"
  res.render("blopost" ,{name:name, search:text })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})