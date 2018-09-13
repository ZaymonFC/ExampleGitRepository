import { sanitizeProduct } from "./sanitizers/sanitizeProduct";

export async function updateProduct(req, res) {
  let collection = req.db.collection('products')

  try {
    if (!req.body._id) throw "Body does not have an _id: " + req.body

    let product = sanitizeProduct(req.body)
    await collection.update({_id: req.body._id}, product)

  } catch (error) {
    console.error(error)
    
    res.send({
      success: false
    })
  }
}