import React, { useState, memo, useMemo } from 'react';
// 引入全局的createContext，方便跨页面组件使用
const App = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({ name: '哈哈哈' })
  console.log('父组件渲染了')

  // 如果给子组件传递引用类型，每次父组件重新渲染，都会生成新的对象传给子组件，由于对象指针变化，子组件会重新渲染
  // const countTest = { count: count + 10 }

  // 我们可以借助useMemo hooks来换成对象，只有当对象所依赖的属性变化时才会重新计算生成新对象
  const countTest = useMemo(() => ({ count: count + 10 }), [count])

  return (
    <>
      <button onClick={() => setCount(count)}>改变count的值---{count}</button>
      <button onClick={() => setNum(num + 1)}>改变num的值---{num}</button>
      <button onClick={() => setObj(obj)}>改变obj的值---{num}</button>
      <hr />
      <Child countTest={countTest} />
      {/* <Son /> */}
    </>
  )
}
// const Son = memo(() => {
//   console.log('孙组件渲染了')
//   return <>哈哈哈</>
// })
// 子组件
const Child = memo((props) => {
  // 从父组件传过来的值从props里面获取
  const { countTest } = props
  console.log('子组件渲染了')
  return (
    <>
      <h1>子组件接收来自父组件props的值--{countTest.count}</h1>
      <hr />
    </>
  )
})
export default App;
