const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
let data = require('./package.json')

const server = express()
.use(express.static(__dirname))
.use(bodyParser.json())
.get('/api/data', (req, res) => res.json(data))
.post('/api/data', (req, res) => {
  res.json(data = req.body)
  console.log(data)
})
.get('*', (req, res) => res.send(path.resolve(index.html)))

server.listen(3333, ()=> { console.log('Ok, listening on localhost:3333.') })
console.log(data)
