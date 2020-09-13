import React from 'react'
import ReactDOM from 'react-dom'
import { common } from '../../common/index'
console.log(common())
import './search.less'
import logo from './images/logo.png'

class Search extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      Text: null
    }
  }
  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render() {
    const Text = this.state.Text
    return (
      <div className="search">
        {
          Text ? <Text /> : null 
        }
        搜索文字的内容<img src={ logo } onClick={ this.loadComponent.bind(this) } /></div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)