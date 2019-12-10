import React, { useState } from 'react'

function App (props) {
  const [count, setCount] = useState(1)
  return <div>
    <h1>{props.title}</h1>
    <p>count: {count}</p>
    <button onClick={() => setCount(count+1)}>addCount</button>
  </div>
}

export default <App title="React-SSR"></App>