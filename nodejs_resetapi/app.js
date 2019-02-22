
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// // HTML Form
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))

const userRoute = require('./routes/user.js')
app.use(userRoute)

app.listen(3003, () => {
    console.log('Server is up and listing on port 3003')
})

