import url from 'url'
import fs from 'fs'

export function renderHTML(path, response) {
  fs.readFile(path, null, (err, data) => {
    if (err) {
      response.writeHead(404)
      response.write('Error 404: File Not Found')
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(data)
    }
    response.end()
  })
}

export function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  let path = url.parse(request.url).pathname

  if (path === '/') {
    renderHTML('./index.html', response)
  } else if (path === '/account') {
    renderHTML('./account.html', response)
  } else {
    renderHTML('', response)
  }
}
