export function sanitizeProduct(body) {
  console.log('Sanitizing:', body)

  if (!(body.name && body.price && body.type && body.description)) {
    throw new Error('Error creating product')
  }

  return {
    name: body.name,
    type: body.type,
    description: body.description,
    price: body.price,
  }
}