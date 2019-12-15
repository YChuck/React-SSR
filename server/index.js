import React from 'react'
import { renderToString } from 'react-dom/server'
import routes from '../src/App'
import express from 'express'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'
import Header from '../src/component/Header'
const store = getServerStore()

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const promises = []
  routes.some(route => {
      const match = matchPath(req.path, route)
      if (match) {
          const { loadData } = route.component
          console.log("matching:", match);
          if (loadData)
              promises.push(new Promise((resolve, reject) => {
                  loadData(store).catch(err => resolve(err)).then(resolve)
              }))
      }
      return match
  })
  Promise.all(promises).then(() => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <Header></Header>
                {routes.map(route => <Route {...route}></Route>)}
            </StaticRouter>
        </Provider>
    )
    res.send(`
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>react ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__context=${JSON.stringify(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `)
  }).catch(() => {
      res.send('500')
  })
})
app.listen(9099, () => {
  console.log('开始监听...')
})