import React from 'react'
import PropTypes from 'prop-types'
import 'babel-polyfill'
import './main.scss'
import api from './api'
import { I18n, loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import { connect } from 'react-redux'
import dictionary from './dictionary'
import store from './store'
import initSteps from './actions/initSteps'
import initProducts from './actions/initProducts'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Message from './components/Message'
import Loader from './components/Loader'

class App extends React.Component {

  state = {
    loading: true,
    error: false
  }

  async componentDidMount() {
    syncTranslationWithStore(store)
    store.dispatch(loadTranslations(dictionary))
    store.dispatch(setLocale('en'))

    this.props.initSteps(Object.values(I18n.t('steps')))

    try {
      const productsData = await api.products.get()
      this.props.initProducts(productsData)
      this.setState({loading: false})
    } catch(e) {
      this.setState({loading: false, error: I18n.t('errors.503')})
    }
  }

  render() {
    const { loading, error } = this.state

    return (
      <div className="app">
        { !loading ?
          <div>
            <div className="app__header">
              <Header />
            </div>
            { error ?
              <div className="app__error">
                <Message text={error} />
              </div>
              :
              <div>
                <div className="app__navigation">
                  <Navigation />
                </div>
                <div className="app__content">
                  <Content />
                </div>
              </div>
            }
          </div>
          :
          <Loader />
        }
      </div>
    )
  }
}

App.propTypes = {
  initSteps: PropTypes.func.isRequired,
  initProducts: PropTypes.func.isRequired
}

export default connect(
  null,
  { initSteps, initProducts }
)(App)
