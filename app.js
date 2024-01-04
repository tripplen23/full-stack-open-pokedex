/* eslint-disable no-console */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('new version deployed')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
