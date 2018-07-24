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
import setUserData from './actions/setUserData'
import setContactStep from './actions/setContactStep'
import updateBasket from './actions/updateBasket'
import updateProducts from './actions/updateProducts'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Message from './components/Message'
import InitLoader from './components/InitLoader'
import Loader from './components/Loader'
import LoginForm from './components/Forms/LoginForm'
import CloseButton from './components/CloseButton'

class App extends Component {

  state = {
    initLoading: true,
    error: false
  }

  async componentDidMount() {
    try {
      syncTranslationWithStore(store)
      await store.dispatch(loadTranslations(dictionary))
      await store.dispatch(setLocale('en'))
      await this.props.initSteps(Object.values(I18n.t('steps')))
      
      const productsData = await api.products.get()
      console.log(productsData)
      this.props.initProducts(productsData)

      if(localStorage.getItem('currentStep')) {
        const currentStepLocal = parseInt(localStorage.getItem('currentStep'))
        this.props.setStep(currentStepLocal > 2 || currentStepLocal < 0 || isNaN(currentStepLocal) ? 0 : currentStepLocal)
      }

      if(localStorage.getItem('basket')) {
        const basketLocal = JSON.parse(localStorage.getItem('basket'))
        await this.props.updateBasket(basketLocal)
        this.props.updateProducts(basketLocal)
      }

      if(localStorage.getItem('token')) {
        const tokenLocal = localStorage.getItem('token')
        const userData = await api.users.getUserData({token: tokenLocal})
        this.props.signIn(tokenLocal)
        this.props.setUserData(userData);
        this.props.setContactStep(1)
      }

      this.setState({initLoading: false})
    } catch(e) {
      if(e.response.data.token) {
        localStorage.removeItem('token')
        this.props.setStep(0)
        this.setState({initLoading: false})
      }
      else {
        this.setState({initLoading: false, error: I18n.t('errors.503')})
      }
    }
  }

  render() {
    const { initLoading, error } = this.state
    const { isLoginForm, toggleLoginForm, isLoading } = this.props

    return (
      <div className="app">
        { !initLoading ?
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
          <InitLoader />
        }
        { isLoading && <Loader /> }
      </div>
    )
  }
}

App.propTypes = {
  initSteps: PropTypes.func.isRequired,
  initProducts: PropTypes.func.isRequired,
  isLoginForm: PropTypes.bool,
  signIn: PropTypes.func,
  setStep: PropTypes.func,
  isLoading: PropTypes.bool,
  setUserData: PropTypes.func,
  setContactStep: PropTypes.func,
  updateBasket: PropTypes.func,
  updateProducts: PropTypes.func
}

export default connect(
  (state) => ({
    isLoginForm: state.userReducer.loginForm,
    isLoading: state.loaderReducer.loading
  }),
  { initSteps, 
    initProducts, 
    toggleLoginForm, 
    signIn, 
    setStep, 
    setUserData, 
    setContactStep, 
    updateBasket, 
    updateProducts }
)(App)
