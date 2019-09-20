import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CountContext } from './../store/useContext.js'
import Counter from './../components/Counter.js'
function Home () {
  const [ count, setCount ]  = useState(0)
  const [ name, setName ]  = useState(0)
  function add() {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>首页</h1>
      <Link to='/kind'>去分类</Link>
      <hr />
      <button onClick={ add }>add</button>
      <CountContext.Provider value={{ count: count, name: name}}>
          <Counter />
      </CountContext.Provider>
    </div>
  )
}
export default Home