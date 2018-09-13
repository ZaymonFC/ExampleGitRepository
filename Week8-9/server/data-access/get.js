import { ObjectId } from 'mongodb'

export async function getProducts(req, res) {
  let collection = req.db.collection('products')

  try {
    const products = await collection
      .find()
      .limit(100)
      .toArray()
    
    res.send(products)
  } catch (error) {
    console.log(error)
    res.send({
      success: false
    })
  }
}

export async function getProduct(req, res) {
  console.log('Searching for: ', req.params.id)
  let collection = req.db.collection('products')

  try {
    const product = await collection.findOne({ _id: ObjectId(req.params.id) })

    console.log(product)
    res.send(product)

  } catch (error) {
    console.error(error)
    res.send({
      success: false
    })
  }
}
