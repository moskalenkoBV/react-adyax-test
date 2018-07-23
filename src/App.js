import React, { Component, Fragment } from 'react'
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
import toggleLoginForm from './actions/toggleLoginForm'
import setStep from './actions/setStep'
import signIn from './actions/signIn'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Message from './components/Message'
import Loader from './components/Loader'
import LoginForm from './components/Forms/LoginForm'
import CloseButton from './components/CloseButton'

class App extends Component {

  state = {
    loading: true,
    error: false
  }

  async componentDidMount() {
    try {
      syncTranslationWithStore(store)
      await store.dispatch(loadTranslations(dictionary))
      await store.dispatch(setLocale('en'))
      await this.props.initSteps(Object.values(I18n.t('steps')))
      
      const productsData = await api.products.get()
      this.props.initProducts(productsData)

      if(localStorage.getItem('token')) {
        this.props.signIn(localStorage.getItem('token'))
      }

      if(localStorage.getItem('currentStep')) {
        this.props.setStep(+localStorage.getItem('currentStep'))
      }

      this.setState({loading: false})
    } catch(e) {
      console.log('error')
      this.setState({loading: false, error: I18n.t('errors.503')})
    }
  }

  render() {
    const { loading, error } = this.state
    const { isLoginForm, toggleLoginForm } = this.props

    return (
      <div className="app">
        { !loading ?
          <Fragment>
            <div className="app__header">
              <Header />
            </div>
            { error ?
              <div className="app__error">
                <Message text={error} />
              </div>
              :
              <Fragment>
                <div className="app__navigation">
                  <Navigation />
                </div>
                <div className="app__content">
                  <Content />
                </div>
                { isLoginForm && 
                  <div className="app__login-form">
                    <div className="app__login-form-wrapper">
                      <div className="app__login-form-close">
                        <CloseButton eventHandle={toggleLoginForm} />
                      </div>
                      <LoginForm />
                    </div>
                  </div>
                }
              </Fragment>
            }
          </Fragment>
          :
          <Loader />
        }
      </div>
    )
  }
}

App.propTypes = {
  initSteps: PropTypes.func.isRequired,
  initProducts: PropTypes.func.isRequired,
  isLoginForm: PropTypes.bool,
  signIn: PropTypes.func,
  setStep: PropTypes.func
}

export default connect(
  (state) => ({
    isLoginForm: state.userReducer.loginForm
  }),
  { initSteps, initProducts, toggleLoginForm, signIn, setStep }
)(App)
