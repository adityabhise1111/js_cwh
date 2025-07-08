const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get/post/put/delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!')
  })

  //blog/int and hint works but only .blog not 
  app.get('/blog/int', (req, res) => {
    res.send('Hello int!')
  })
  app.get('/blog/:slug', (req, res) => {
    res.send(`hellow${req.params.slug}`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 