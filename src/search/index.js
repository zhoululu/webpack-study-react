import React from 'react'
import ReactDOM from 'react-dom'
import { common } from '../../common/index'
console.log(common())
import './search.less'
import logo from './images/logo.png'

class Search extends React.Component {
  render() {
    return (
      <div className="search">搜索文字的内容<img src={ logo } /></div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)