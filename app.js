const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

app.disable('x-powered-by')
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/auth', require('./src/routes/auth'))

app.use('/api/posts', require('./src/routes/posts.routes'))

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
