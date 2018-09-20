import { app } from './app'

let http = require('http')
let server = http.Server(app)

const port = process.env.port || 4200

//
// ─── SERVER START ───────────────────────────────────────────────────────────────
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
