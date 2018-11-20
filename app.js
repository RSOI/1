'use strict'

const reduce = require('./modules/reduce.js')

const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root: '.'})
})

app.get('/reduce', (req, res) => {
  const source = reduce(req.query.source)
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ result: source }));
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port : ${port}`)
})