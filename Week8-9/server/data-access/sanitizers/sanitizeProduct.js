export function sanitizeProduct(body) {
  if (!(body.name && body.price && body.type && body.description && body.price)) {
    throw new Error('Error creating product')
  }

  return {
    name: body.name,
    type: body.type,
    description: body.description,
    price: body.price,
  }
}