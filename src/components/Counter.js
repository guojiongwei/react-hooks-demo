import React, { useContext } from 'react';
import { CountContext } from './../store/useContext.js'
function Counter(){
  const data = useContext(CountContext)  //一句话就可以得到count
  console.log(data)
  return (<h2>{ data.count }</h2>)
}
export default Counter