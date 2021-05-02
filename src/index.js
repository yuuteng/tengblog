const express = require('express')
const app = express()
// Set heroku server port
const port = process.env.PORT || 3000

// use the express-static middleware
let fs = require('fs');
let path = require('path');
app.use(express.static(path.resolve(__dirname, './app/dist')));
// set router to index.html
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './app/dist/index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello Teng !')
})

app.listen(port, () => {
  console.log(`TengBlog Server is listening at http://localhost:${port}`)
  console.log('Test git address')
})