import React, { Component } from 'react'
import Header from './components/regions/Header'
import Steps from './components/regions/Steps'
import Content from './components/regions/Content'
import './main.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__steps">
          <Steps />
        </div>
        <div className="app__content">
          <Content />
        </div>
      </div>
    )
  }
}

export default App
