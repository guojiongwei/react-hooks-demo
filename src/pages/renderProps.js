import React, { Component } from 'react'
const url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5'
// 定义高阶组件给组件提供书旗小说列表数据
  class RenderProps extends Component {
    state = {
      list: []
    }
    async componentDidMount() {
      const { data } = await fetch(url).then(res => res.json())
      this.setState({
        list: data
      })
    }
    render() {
      const { list } = this.state
      return (
        <>
          { this.props.render(list) }
        </>
      )
    }
  }
const Hoc = props => {
  return (
    <ul>
      <RenderProps render={list => (
          list.map(item => (
            <li key={item.bookid}>{item.title}</li>
          ))
      )} />
    </ul>
  )
}
export default Hoc