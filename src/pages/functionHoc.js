import React, { useState, useEffect } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { useStore } from 'react-redux'
const url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5'
// 自定义hooks给组件提供书旗小说列表数据
const useBookList = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await fetch(url).then(res => res.json())
      setList(data)
    })()
  }, [])
  return list
}

const Hoc = () => {
  const history = useHistory()
  const params = useParams()
  const location = useLocation()
  const [count, setCount] = useState(0)
  const list = useBookList()
  const store = useStore()
  console.log(list, history, params, location, store)
  return (
    <ul>
      {count}
      <button onClick={() => setCount(count + 1)}>点击</button>
      {
        list.map(item => (
          <li key={item.bookid}>{item.title}</li>
        ))
      }
    </ul>
  )
}
export default Hoc