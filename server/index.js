import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App.js'
import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(App)
  res.send(`
  <html>
  <head>
      <meta charset="utf-8" />
      <title>react ssr</title>
  </head>
  <body>
      <div id="root">${content}</div>
      <script src="/bundle.js"></script>
  </body>
  </html>
  `)
})
app.listen(9099, () => {
  console.log('开始监听...')
})