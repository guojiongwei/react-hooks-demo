import React, { PureComponent, memo, Component } from 'react'

class Memo extends Component {
  state = {
    count: 0
  }
  changeCount = () => {
    this.setState({
      count: 1
    })
  }
  render(){
    console.log('父组件渲染了')
    const { count } = this.state
    return (
      <>
        <button onClick={this.changeCount}>改成count</button>
        <hr />
        <Child count={count} />
      </>
    )
  }
}
// PureComponent组件的state和props都会进行浅比较
// memo只对组件里的props进行比较
@memo
class Child extends Component {
  render(){
    console.log('子组件渲染了')
    const { count } = this.props
    return (
      <>
        <h1>{count}</h1>
      </>
    )
  }
}
export default memo(Memo)