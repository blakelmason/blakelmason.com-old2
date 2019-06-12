import express from 'express'

let server = express()

const PORT = process.env.PORT || 3000

server.get('/', (req, res) => res.send('HELLO FROM EXPRESS'))

process.env.NODE_ENV === 'production' && server.use(express.static('public'))

server.listen(3000, () => console.log(`Listening on port ${PORT}`))
