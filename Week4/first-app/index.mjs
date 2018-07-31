const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 4200

// Define the statically available content
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist/first-app')))

app.post('/login', (req, res) => {
    const username = 'test'
    const password = 'test'

    if (req.body.username === username && req.body.password === password) {
        console.log('Here')
        res.send(JSON.stringify({
            'auth': true,
            userObj : {
                'id': 1,
                'username': 'General Kenobi',
                'birthdate': new Date('July 1, 1997'),
            }
        }))

        console.log('Sent Auth')
    }
    
    // res.send(responseData)
    res.end()
})

app.listen(port, () => console.log(`Express app listening on port ${port}`))
 