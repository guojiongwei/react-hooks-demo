import React, { useState, memo, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  console.log('父组件渲染了')

  // 1.不用useCallback的方法，不会缓存，每一次父组件渲染，都会生成新的函数指针，引起传入该方法的子组件重新渲染
  // const onChildCount = () => {
  //   setCount(count + 1)
  // }
  // 2.使用useCallback的方法，每一次父组件渲染，只有第二个参数里面的依赖变化后，才会会生成新的函数指针，引起传入该方法的子组件重新渲染
  const onChildCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  // 改变num的值
  const onChangeNum = () => {
    setNum(num + 1)
  }
  return (
    <>
      <button onClick={onChildCount}>改变count的值---{count}</button>
      <button onClick={onChangeNum}>改变num的值---{num}</button>
      {/* 把onChildCount方法传给子组件 */}
      <Child onChildCount={onChildCount} count={count} />
    </>
  )
}

const Child = memo(props => {
  const { onChildCount, count } = props
  console.log('子组件渲染了')
  return (
    // 子组件点击触发父组件事件
    <h1 onClick={onChildCount}>子组件--{count}</h1>
  )
})
export default App;
