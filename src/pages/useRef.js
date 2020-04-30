import React, { useState, forwardRef, useEffect, useImperativeHandle, useRef, memo } from 'react';
const App = () => {
  const [count, setCount] = useState(0)
  // 1. 用法1，当作全局变量，每次组件重新渲染不会被重置，可以用来解决useEffect闭包问题
  const countRef = useRef(0)
  console.log('countRef',countRef)
  // console.log('父组件渲染了')
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(count)
  //     setCount(++countRef.current)
  //   }, 1000)
  //   // return一个函数，会在页面卸载的时候执行
  //   return () => clearInterval(timer)
  // }, [])

  // 2. 用来操作节点，获取节点信息
  const domRef = useRef()
  useEffect(() => {
    // 获取节点信息
    console.log('domRef',domRef)
    domRef.current.onclick = function(){
      console.log('hahahaha')
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      console.log(count)
    }
  }, [])

  // 3.配合forwardRef用来操作函数组件里面的节点还有方法
  const componentRef = useRef()
  useEffect(() => {
    // 获取组件节点信息,child组件里面的h1节点
    console.log('componentRef',componentRef)
    console.log(componentRef.current.childRef())
    componentRef.current.test()
  }, [])
  return (
    <>
      <button ref={domRef} onClick={() => setCount(count + 1)}>count---{count}</button>
      <Child count='1111' ref={componentRef} />
    </>
  )
}
// const Child = () => {
//   const test = () => {
//     console.log('2222')
//   }
//   return (
//     <>111</>
//   )
// }
const Child = memo(forwardRef((props, ref) => {
  console.log('子组件渲染了', props, ref)
  const childRef = useRef()
  const childRef1 = useRef()
  // 在子组件useImperativeHandle里面的方法可以提供给父组件调用子组件的方法
  useImperativeHandle(ref, () => ({
    test(){
      console.log(1111)
    },
    childRef(){
      return childRef.current
    },
    childRef1(){
      return childRef1.current
    }
  }))
  return (
      <>
        <h1 ref={childRef}>子组件--</h1>
        <h2 id='h2' ref={childRef1}>子组件--</h2>
      </>
  )
}))
export default App;
