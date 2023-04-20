const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
})
app.listen(8080, () => {
    console.log('listening on port 8080')
})