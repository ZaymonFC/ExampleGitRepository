import { ReadJSON, WriteJSON } from './data-access/file-handler'
import {
  selectN,
  findItems,
  insertItems,
  updateItems,
  deleteItems,
  insertForeignKey,
  removeForeignKey,
  removeReference,
  deleteCollection
} from './data-access/repository'
import { sanitiseUserObject, sanitiseGroupObject, sanitiseChannelObject } from './sanitizers';

const uuid = require('uuid/v4')
const path = require('path')
let express = require('express')
let app = express()

const dataFiles = {
  UserFile: 'server/data/user.json',
  GroupFile: 'server/data/group.json',
  ChannelFile: 'server/data/channel.json',
}

const uniqueFields = {
  User: ['id', 'username'],
  Group: ['id', 'name'],
  Channel: ['id'],
}

let http = require('http')
let server = http.Server(app)

let socketIO = require('socket.io')
let io = socketIO(server)

const port = process.env.port || 4200

// Setup Middleware and static serving
app.use(express.static(path.join(__dirname, '../dist/sockets')))
app.use(express.json())


//
// ─── SERVER START ───────────────────────────────────────────────────────────────
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
