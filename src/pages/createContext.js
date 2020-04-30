import React, { PureComponent } from 'react'
import Sun from '@/components/Sun.js'
// 1.要创建一个context
import { ChildContext, TestContexts } from '@/store/context.js'
class Parent extends PureComponent {
  componentDidMount(){
    console.log(this)
    this.refs.child.test()
  }
  render(){
    return (
      <TestContexts.Provider value={{ name: '红梅姐姐', age: 18 }}>
        <Child ref='child' count={1} />
      </TestContexts.Provider>
    )
  }
}

class Child extends PureComponent {
  static contextType = TestContexts
  test = () => {
    console.log('1111')
  }
  render(){
    console.log(this)
    return (
      <ChildContext.Provider value={{ sex: '女'}}>
        <Sun />
      </ChildContext.Provider>
    )
  }
}
// Child.propTypes = {
//   count: PropTypes.number
// }
export default Parent