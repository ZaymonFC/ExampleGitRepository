import express from 'express'
import http from 'http'

const app = express()
const port = 3000

// Define the statically available content
app.use(express.static('./public'))
const __dirname = './pages'

app.get('/test', (req, res) => {
    let page = 'test.html'
    res.sendfile(`${__dirname}/${page}`)
})

app.get('/', (req, res) => {
    // res.send(`Express JS Server Running on ${port}`)
    res.sendfile(`${__dirname}/index.html`)
})

app.post('/login', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => console.log(`Express app listening on port ${port}`))
