import express from 'express'
import path from 'path'

let server = express()

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname + '/client/dist')))

  server.get('/', (req, res) =>
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
  )
} else {
  server.get('/', (req, res) => res.send('HELLO FROM EXPRESS'))
}

server.listen(3000, () => console.log(`Listening on port ${PORT}`))
