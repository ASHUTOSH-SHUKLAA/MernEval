
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`SErver listening on port ${port}`)
})
