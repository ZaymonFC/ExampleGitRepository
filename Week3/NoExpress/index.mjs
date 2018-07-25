import http from 'http'
import * as routes from './routes.mjs'

http.createServer(routes.handleRequest).listen(3000)
