import React from 'react';
import ReactDOM from 'react-dom';
import common from '../../common/index';
import './search.less';
import logo from './images/logo.png';
// eslint-disable-next-line no-console
console.log(common());

class Search extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className="search">
        {
          Text ? <Text /> : null
        }
        搜索文字的内容
        <img src={logo} alt="" onClick={this.loadComponent.bind(this)} aria-hidden="true" />
      </div>
    );
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root'),
);
