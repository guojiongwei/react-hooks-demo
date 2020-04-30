import React, { useReducer } from 'react';
const reducer =(state, action)=>{
  switch (action.type) {
      case "add":
          return state+1
      case 'delete':
          return state-1
      default:
          return state;
  }
}

const Hook =()=>{
  const [count, dispatch] = useReducer(reducer, 0)
  return(
      <div>
         count:{count}
         <button onClick={()=> dispatch({type:'add'})}>add</button>
          <button onClick={()=> dispatch({type:'delete'})}>delete</button>
      </div>
  )
}

export default Hook

