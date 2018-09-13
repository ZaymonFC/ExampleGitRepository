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

  console.log(collection)

  try {
    const product = await collection
      .find({ _id: req.params.id })
      .limit(1)
      .toArray()


    console.log(product)
    res.send(product.shift())

  } catch (error) {
    console.error(error)
    res.send({
      success: false
    })
  }
}
