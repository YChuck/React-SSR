import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'
import User from './container/User'

// function App (props) {
//   const [count, setCount] = useState(1)
//   return <div>
//     <h1>{props.title}</h1>
//     <p>count: {count}</p>
//     <button onClick={() => setCount(count+1)}>addCount</button>
//   </div>
// }

// export default <App title="React-SSR"></App>
// export default (
//   <>
//       <Route exact path="/" component={Index}></Route>
//       <Route exact path="/about" component={About}></Route>
//   </>
// )

export default [
  {
      path: "/about",
      component: About,
      exact: true,
      key: 'about'
  }, {
      path: "/user",
      component: User,
      exact: true,
      key: 'user'
  }, {
      path: "/",
      component: Index,
      key: 'index'
  },
]