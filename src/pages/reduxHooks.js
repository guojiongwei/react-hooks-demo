import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const ReduxHooks = () => {
  const dispatch = useDispatch()
  const { name, age, sex } = useSelector(state => state.person)
  useEffect(() => {
    console.log(name, age, sex)
  }, [name, age, sex])
  console.log('父组件渲染了')
  return (
    <>
      <h2>姓名：---- {name}</h2>
      <h2>年龄---- {age}</h2>
      <h2>性别---- {sex}</h2>
      <button onClick={() => dispatch({ type: 'SET_NAME', data: '哈哈哈' })}>修改姓名</button>
      <button onClick={() => dispatch({ type: 'SET_AGE', data: 20 })}>修改年龄</button>
      <button onClick={() => dispatch({ type: 'SET_SEX', data: '女' })}>修改性别</button>
      <Child />
    </>
  )
}
const Child = () => {
  console.log('子组件渲染')
  return (
    <></>
  )
}
export default ReduxHooks