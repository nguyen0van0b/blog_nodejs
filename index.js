const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
    })

app.get('/123', (req, res) => {
    var a = 2,b=3;
    var c = a + b;
    var d = a - b;
    res.send('Hello World! c = ' + c + " - d = " + d )
  })

app.get('/phuoc', (req, res) => {
    res.send('Hello Phuoc')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})