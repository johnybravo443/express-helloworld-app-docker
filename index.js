// https://www.section.io/engineering-education/building-a-nodejs-application-using-docker/
// app developed from this website
// To run the app. use either of the command
// -> npm start
// -> node index.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})