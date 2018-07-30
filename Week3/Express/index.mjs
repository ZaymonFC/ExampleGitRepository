const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// Define the statically available content
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const directory = '/pages'

app.get('/test', (req, res) => {
    let page = 'test.html'
    res.sendfile(`${directory}/${page}`)
})

app.get('/', (req, res) => {
    // res.send(`Express JS Server Running on ${port}`)
    res.sendFile(`${__dirname}${directory}/index.html`)
})

app.get('/account', (req, res) => {
    res.sendFile(`${__dirname}${directory}/account.html`)
})

app.post('/login', (req, res) => {
    const username = 'test'
    const password = '1234'

    let data = req.body

    if (data[0].value === username && data[1].value === '1234') {
        let responseData = {
            status: true
        }
        res.send(responseData)
        return
    }
    let responseData = {
        status: false
    }
    res.send(responseData)
    res.end()
})

app.listen(port, () => console.log(`Express app listening on port ${port}`))
