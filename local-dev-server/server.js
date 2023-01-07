const express = require('express')
const fs = require('fs')
const https = require('https')
const { relative } = require('path')

const app = express()

app.use(express.static(relative(__dirname, '../static-page')))

if (process.argv.includes('--https')) {
  if (!fs.existsSync('./ssl/certificate.crt')) throw new Error('no certificate found at ./ssl/certificate.crt')
  const certificate = fs.readFileSync('./ssl/certificate.crt')
  if (!fs.existsSync('./ssl/private.key')) throw new Error('no private key at ./ssl/private.key')
  const privateKey = fs.readFileSync('./ssl/private.key')
  
  server = https.createServer({
    key: privateKey,
    cert: certificate
  }, app).listen(3000, () => {
    console.log('app listening on port 3000')
  })
}
else {
  app.listen(3000, () => {
    console.log('app listening on port 3000')
  })
}