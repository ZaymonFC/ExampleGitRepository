export async function removeProduct(req, res) {
  const collection = req.db.collection('products')
  const productId = req.params.id

  try {
    await collection.findOneAndDelete({ id: productId })
    res.send({
      success: true
    })
  } catch (error) {
    res.send({
      success: false
    })
    throw error
  }


  req.close()
}