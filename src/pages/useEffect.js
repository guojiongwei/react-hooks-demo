import React, { useState, useEffect } from 'react';
const App = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  // 1. 第二个参数为空数组时，相当于componentDidMounte，未被销毁时全局只执行一次
  useEffect(() => {
    console.log('1.页面加载完成，全局只执行一次')
  }, [])

  // 2. 没有第二个参数，相当于componentDidUpdate，当有useState状态和props更改后就会执行
  useEffect(() => {
    console.log('2.有state或props更新啦')
  })

  // 3. 第二个参数数组里面传入变量依赖，则只有该依赖改变的时候才会触发执行
  useEffect(() => {
    console.log('3.count的值改变啦')
  }, [ count ])

  // 4. 里面return一个函数，则在页面卸载的时候执行
  useEffect(() => {
    return () => {
      console.log('4.页面卸载啦')
    }
  }, [])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>改变count的值---{count}</button>
      <button onClick={() => setNum(num + 1)}>改变num的值---{num}</button>
    </>
  )
}
export default App;
