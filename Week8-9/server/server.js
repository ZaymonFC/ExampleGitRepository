import { createCollection } from './data-access/create'
import { addProduct } from './data-access/add'
import { updateProduct } from './data-access/update'
import { removeProduct } from './data-access/remove'
import { getProducts, getProduct } from './data-access/get'
import { searchProducts } from './data-access/search'

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
app.use(async function (req, res, next) {
  try {
    let client = await MongoClient.connect(dbUrl, {useNewUrlParser: true})
    const db = client.db('test')
    req.db = db
  
    next()
  } catch (error) {
    console.log('Something went wrong providing a connection to request', error)
  }
})

app.use(express.static(path.join(__dirname, '../dist/sockets')))
app.use(express.json())

// ROUTES
app.get('/createCollection', async (req, res) => createCollection(req, res))
app.post('/product', async (req, res) => addProduct(req, res))
app.delete('/product/:id', async (req, res) => removeProduct(req, res))
app.patch('/product/:id', async (req, res) => updateProduct(req, res))
app.get('/product', async (req, res) => getProducts(req, res))
app.get('/product/:id', async (req, res) => getProduct(req, res))
app.get('/product/search/:searchFilter', async (req, res) => searchProducts(req, res))

app.get('/login/:username', (req, res) => {
  console.log('Logging in')
  res.send({
    id: 'something',
    username: 'Zaymon',
    email: 'zaymon@email.com',
    rank: 'super-admin'
  })
})

//
// ─── SERVER START ───────────────────────────────────────────────────────────────
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
