import React, { useState, useRef, useEffect } from 'react';
const App = () => {
  const [count, setCount] = useState(0)
  const btnRef = useRef()
  // 一.react合成事件测试
  // 1.react优化策略会默认合并set,并且不能立即拿到最新的值，也会存在闭包问题，在延时器里面的值还是这次渲染后的初始值
  const changeCount = () => {
    setCount(count + 1)
    setCount(count + 2)
    setCount(count + 3)
    setCount(count + 4) // 这里会覆盖合并掉前几个setCount，
    console.log('设置后的值并没有里面更新',count)
    setTimeout(() => {
      // '设置后的值并没有里面更新,所以在延时器里面的还是更新前的值，+1 又会把上面的setCount(count + 4)覆盖掉
      setCount(count + 1)
      console.log(count)
    }, 1000)
    console.log(count)
  }
  // 2.回调函数设置，不会对setCount进行合并，但依然存在闭包问题
  const unChangeCount = () => {
    setCount(count + 1)
    setCount(count => {
      console.log('111', count)
      return count + 1
    })
    setCount(count => count + 2)
    setCount(count => count + 3)
    setCount(count => count + 4)
    console.log('count',count)
    setTimeout(() => {
      // '设置后的值并没有里面更新,在延时器里面的还是更新前的值，+1 又会把上面的setCount(count + 4)覆盖掉
      setCount(count + 1)
      console.log(count)
    }, 1000)
  }

  // 二.原生事件测试
  useEffect(() => {
    btnRef.current.onclick = function(){
      setCount(count + 1)
      setCount(count + 2)
      setCount(count + 3)
      setCount(count + 4) // 这里会覆盖合并掉前几个setCount，
      console.log('设置后的值并没有里面更新',count)
      setTimeout(() => {
        // '设置后的值并没有里面更新,所以在延时器里面的还是更新前的值，+1 又会把上面的setCount(count + 4)覆盖掉
        setCount(count + 1)
        console.log(count)
      }, 1000)
      console.log(count)
    }
  }, [count])

  // 三.生命周期测试,和合成事件和原生事件表现形式一致
  useEffect(() => {
    setCount(count + 1)
    setCount(count + 2)
    setCount(count + 3)
    setCount(count + 4) // 这里会覆盖合并掉前几个setCount，
    console.log('设置后的值并没有里面更新',count)
    setTimeout(() => {
      // '设置后的值并没有里面更新,所以在延时器里面的还是更新前的值，+1 又会把上面的setCount(count + 4)覆盖掉
      setCount(count + 1)
      console.log(count)
    }, 1000)
    console.log(count)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <button onClick={changeCount}>会合并的setCount---{count}</button>
      <button onClick={unChangeCount}>不会合并的setCount---{count}</button>
      <button ref={btnRef}>原生方法改变count---{count}</button>
    </>
  )
}
export default App;

