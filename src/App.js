import React, { Component } from 'react'
import Header from './components/regions/Header'
import Steps from './components/regions/Steps'
import Content from './components/regions/Content'
import { setProducts } from './actions/setProducts'
import { connect } from 'react-redux'
import './main.scss';

class App extends Component {

  componentDidMount() {
    this.props.setProducts();
  }

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

export default connect(null, { setProducts })(App)
