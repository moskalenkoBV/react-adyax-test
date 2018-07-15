import React from 'react'
import PropTypes from 'prop-types'
import './main.scss'
import { I18n, loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import { connect } from 'react-redux'
import dictionary from './dictionary'
import store from './store'
import initSteps from './actions/initSteps'
import getProducts from './actions/getProducts'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

class App extends React.Component {

  componentDidMount() {
    syncTranslationWithStore(store)
    store.dispatch(loadTranslations(dictionary))
    store.dispatch(setLocale('en'))

    this.props.initSteps(Object.values(I18n.t('steps')))
    this.props.getProducts()
  }

  render() {

    return (
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__navigation">
          <Navigation />
        </div>
        <div className="app__content">
          <Content />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  initSteps: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired
}

export default connect(
  null,
  { initSteps, getProducts }
)(App)
