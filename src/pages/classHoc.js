import React, { Component } from 'react'
const url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5'
// 定义高阶组件给组件提供书旗小说列表数据
const HocBookList = WarpComponent => {
  return class HocComponent extends Component {
    state = {
      list: []
    }
    async componentDidMount() {
      const { data } = await fetch(url).then(res => res.json())
      this.setState({
        list: data
      })
      setTimeout(() => {
        console.log('执行啦')
        this.setState({
          list: data
        })
      }, 3000)
    }
    render() {
      return (
        <WarpComponent {...this.props} list={this.state.list} />
      )
    }
  }
}
// memo优化函数
const memo = WarpComponent => {
  return class HocComponent extends Component {
    shouldComponentUpdate(nextProps, nextState){
      // console.log(nextProps, this.props)
      // 循环浅比较props
      for(let key in nextProps){
        if(this.props[key] !== nextProps[key]){
          return true
        }
      }
      // 循环浅比较state
      for(let key in nextState){
        if(this.state[key] !== nextProps[key]){
          return true
        }
      }
      return false
    }
    render(){
      return (
        <WarpComponent {...this.props} />
      )
    }
  }
}
const Hoc = props => {
  const { list } = props
  return (
    <ul>
      {
        list.map(item => (
          <li key={item.bookid}>{item.title}</li>
        ))
      }
    </ul>
  )
}
export default memo(HocBookList(Hoc))