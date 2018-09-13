import { sanitizeProduct } from './sanitizers/sanitizeProduct'

export async function addProduct(req, res) {
  let collection = req.db.collection('products')
  
  try {
    let product = sanitizeProduct(req.body)
    await collection.insertOne(product)
    res.send({
      ok: true
    })
  } catch (error) {
    res.send({
      ok: false
    })
  }
}