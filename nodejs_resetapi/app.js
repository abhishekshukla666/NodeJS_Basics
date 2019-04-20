
const express = require('express')
const app = express()
const port = process.env.PORT || 3003
// const bodyParser = require('body-parser')

// // HTML Form
// app.use(express.static('./public'))
// app.use(bodyParser.urlencoded({extended: false}))

const userRoute = require('./routes/user.js')
app.use(userRoute)


// app.use(express.json())
// app.post('/users', (req, res) => {
//     console.log(req.body)
//     res.send('testing!!')
// })

app.listen(3003, () => {
    console.log('Server is up and listing on port 3003')
})



