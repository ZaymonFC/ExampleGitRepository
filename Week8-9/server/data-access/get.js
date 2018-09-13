async function getProducts(req, res) {
  let collection = req.db.collection('products')

  try {
    const products = await collection
      .find()
      .limit(100)
    
    res.send({
      success: true,
      products: products
    })
  } catch (error) {
    res.send({
      success: false
    })
  }
}