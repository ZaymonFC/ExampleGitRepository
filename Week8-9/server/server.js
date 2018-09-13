import { createCollection } from './data-access/create'
import { addProduct } from './data-access/add'

const path = require('path')
let express = require('express')
let app = express()


let http = require('http')
let server = http.Server(app)

const port = process.env.port || 4200

// Setup MongoDB
let MongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://127.0.0.1:27017'

// Setup Middleware and static serving
app.use(function (req, res, next) {
  MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
  }, (err, client) => {
    if (err) throw err

    req.db = client.db('test')
    req.client = client
    next()
  })
})

app.use(express.static(path.join(__dirname, '../dist/sockets')))
app.use(express.json())

// Routes
app.get('/createCollection', async (req, res) => createCollection(req, res))
app.post('/product', async (req, res) => addProduct(req, res))
app.delete('/product:id', async (req, res) => removeProduct(req, res))

//
// ─── SERVER START ───────────────────────────────────────────────────────────────
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
