import React from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import Kind from './pages/Kind.js'
import User from './pages/User.js'
function App () {
  return (
    <Router>
      <Route exact path='/' component={ Home } />
      <Route exact path='/cart' component={ Cart } />
      <Route exact path='/kind' component={ Kind } />
      <Route exact path='/user' component={ User } />
    </Router>
  )
}
export default App