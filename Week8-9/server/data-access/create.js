const products = [
  { name: 'iPhone X', price:'1200', description: 'Overpriced Phone', type: 'Phone' },
  { name: 'iPhone X R', price:'1200', description: 'Overpriced Phone', type: 'Phone' },
  { name: 'iPhone XL', price:'1200', description: 'Overpriced Phone', type: 'Phone' },
]

export async function createCollection(req, res) {
  let db = req.db

  try {
    await db.createCollection('products')

    // Seed Products
    let collection = db.collection('products')
    // const ids = products.map(element => element._id)
    // await collection.deleteMany({_id:{$in:ids}})
    await collection.insertMany(products)

  } catch (error) {
    console.error(error)
    res.send({
      success: false
    })
  }

  res.send('Created Product Collection')
}

