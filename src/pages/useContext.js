import React, { useState, memo, useContext, useMemo } from 'react';
// 引入全局的createContext，方便跨页面组件使用
import { TestContext } from '@/store/context.js'
const App = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  console.log('父组件渲染了')

  const context = useMemo(() => ({ text: `我是顶级组件传过来的context值--${count}` }), [count])
  // const context = { text: `我是顶级组件传过来的context值--${count}` }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count---{count}</button>
      <button onClick={() => setNum(num + 1)}>num---{num}</button>
      <hr />
      {/* // 把下级组件放在TestContext的Provider注入器组件里面，里面所有的组件都可以接收到value上的值 */}
      <TestContext.Provider value={context}>
        <Child count={count} />
      </TestContext.Provider>
    </>
  )
}

// 子组件
const Child = memo((props) => {
  // 从父组件传过来的值从props里面获取
  const { count } = props
  // 从context传过来的值用useContext获取
  const context = useContext(TestContext)
  console.log('子组件渲染了')
  return (
    <>
      <h1>子组件接收来自父组件props的值--{count}</h1>
      <h2>子组件接收context--{context.text}</h2>
      <hr />
      <Son />
    </>
  )
})

// 孙组件
const Son = memo(() => {
  const context = useContext(TestContext)
  console.log('孙组件渲染了')
  return (
    <h3>孙组件接收context---{context.text}</h3>
  )
})
export default App;
