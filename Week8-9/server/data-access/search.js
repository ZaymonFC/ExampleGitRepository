export async function searchProducts(req, res) {
  const collection = req.db.collection('products')
  const searchFilter = req.params.searchFilter

  console.log('Searching for: ', searchFilter)

  const results = await collection.find({$or: [{"description": new RegExp(searchFilter)}, {"name": new RegExp(searchFilter)}]})
    .stream()
    .toArray()

  console.log(results)
  res.send(results)
}