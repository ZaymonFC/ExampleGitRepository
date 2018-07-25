const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// Define the statically available content
app.use(express.static('./public'))

let jsonParser = bodyParser.json()

const directory = './pages'

app.get('/test', (req, res) => {
    let page = 'test.html'
    res.sendfile(`${directory}/${page}`)
})

app.get('/', (req, res) => {
    // res.send(`Express JS Server Running on ${port}`)
    res.sendfile(`${directory}/index.html`)
})

app.post('/login', jsonParser, (req, res) => {

    console.log(req.body)
    res.send('Okay')
})

app.listen(port, () => console.log(`Express app listening on port ${port}`))
