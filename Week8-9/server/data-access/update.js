import { sanitizeProduct } from "./sanitizers/sanitizeProduct";

export async function updateProduct(req, res) {
  let collection = req.db.collection('products')

  try {
    let product = sanitizeProduct(req.body)
    await collection.update({_id: req.params.id}, product)

  } catch (error) {
    console.error(error)

    res.send({
      success: false
    })
  }
}