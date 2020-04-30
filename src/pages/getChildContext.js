import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
class Parent extends PureComponent {
  // 1.在父组件定义getChildContext方法，并返回一个对象，该对象就是要传给后代组件的值
  getChildContext(){
    return {
      name: '红梅姐姐',
      age: 18
    }
  }
  // 2.同时需要规定一下context的类型
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }
  render(){
    return (
        <Child count={1} />
    )
  }
}


class Child extends PureComponent {
  // 组件接收context使用的 静态方法 contextTypes，可以选择要接收的参数
  static contextTypes = {
    name: PropTypes.string
  }
  // 组件接收props的时候就是propTypes
  static propTypes = {
    count: PropTypes.number
  }
  render(){
    // console.log(this)
    return (
        <Sun />
    )
  }
}
// Child.propTypes = {
//   count: PropTypes.number
// }
class Sun extends PureComponent {

  static contextTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }
  render(){
    console.log(this)
    return (
        <h1>sun</h1>
    )
  }
}
export default Parent