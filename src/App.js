import React, {Component} from 'react'
import {Button} from 'antd'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="antd">
          </div>
          <p className="antd-desc">
            服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="primary" href="https://ant.design" target="_blank">Learn Ant Design</Button>
        </header>
      </div>
    )
  }
}

export default App
