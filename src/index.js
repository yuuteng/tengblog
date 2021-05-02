const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Teng !')
})

app.listen(port, () => {
  console.log(`TengBlog Server is listening at http://localhost:${port}`)
  console.log('Test git address')
})