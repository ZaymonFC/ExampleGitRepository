const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 2000

// Define the statically available content
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(static)

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
    const password = 'test'

    let data = req.body

    console.log(req.body)
    
    // res.send(responseData)
    res.end()
})

app.listen(port, () => console.log(`Express app listening on port ${port}`))
 