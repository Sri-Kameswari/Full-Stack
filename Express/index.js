import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is the home page')
})

app.get('/about', (req, res) => {
    res.send('You have entered the about page')
  })

app.get('/contact', (req, res) => {
    res.send('Find more info in this contact page')
  })  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})