
const express = require('express')
const app = express()
const mysql = require('mysql')

// JSON File
const jsonData = require('../resources/dummy.json')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'node_api_db'
})

db.connect((err) => {
    if (err) {
        res.send(err)
    } else {
        console.log("Connected!")
    }
})

const route = express.Router()

// route.get('/users', (req, res) => {
//     const queryString = 'select * from users'
//     db.query(queryString, (err, rows, fields) => {
//         if (err) {
//             res.sendStatus(500)
//             return
//         }
//         const user = rows.map((row) => {
//             return {
//                 id: row.id,
//                 first_name: row.firstName,
//                 last_name: row.lastName
//             }
//         })
//         res.json(user)
//     })
// })

route.get('/json', (req, res) => {
    res.json(jsonData)
})


route.post('/userCreate', (req, res) => {
    
    const firstName = req.body.createFirstName
    const lastName = req.body.createLastName
    const queryString = 'INSERT INTO users (firstName, lastName) VALUES (?, ?)'
    db.query(queryString, [firstName, lastName], (err, results, fields) => {
        if (err) {
            res.sendStatus(500)
            return
        }

        res.send('Inserted into db')
    })

})

route.get('/users/:id', (req, res) => {
    console.log('Fetching the user for id: ' + req.params.id)
    // create connection
    const userId = req.params.id
    const queryString = 'select * from users where id=' + userId
    db.query(queryString, (err, rows, fields) => {
        if (err) {
            res.sendStatus(500)
            return
        }
        const user = rows.map((row) => {
            return {name: row.firstName + ' ' + row.lastName}
        })
        res.json(user)
    })
})

module.exports = route