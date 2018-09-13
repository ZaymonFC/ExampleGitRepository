export async function removeProduct(req, res) {
  let collection = req.db.collection('products')
  const productId = req.params.id

  try {
    const r = await collection.deleteOne({_id: productId})
    console.log(r.deletedCount)
    if (r.deletedCount !== 1) throw 'Something went wrong deleting'
    res.send({
      success: true
    })
  } catch (error) {
    res.send({
      success: false
    })
    console.error(error)
  }
}