import express from 'express'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const server = express()

const PORT = process.env.PORT || 3000

server.use(express.static(path.join(__dirname + '/client/dist')))

server.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
)

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
