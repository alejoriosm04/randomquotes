const express = require('express')
const os = require("os")
const app = express()
const port = 80

const phrases = [
  "Inspire your future",
  "The future is now",
  "The future is bright",
  "The future is here",
  "The future is ours",
  "The future is in your hands",
]

app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * 7);
  res.send(phrases[number]+" - Container Id: "+os.hostname())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

