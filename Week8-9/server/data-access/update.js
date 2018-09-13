import { sanitizeProduct } from "./sanitizers/sanitizeProduct";
import { ObjectId } from 'mongodb'

export async function updateProduct(req, res) {
  let collection = req.db.collection('products')

  try {
    let product = sanitizeProduct(req.body)
    await collection.update({_id: ObjectId(req.params.id)}, product)

  } catch (error) {
    console.error(error)

    res.send({
      success: false
    })
  }
}