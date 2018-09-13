export async function createCollection(req, res) {
  let db = req.db
  await db.createCollection('products', (err, result) => {
    if (err) throw err
  })

  res.send('Created Product Collection')
}