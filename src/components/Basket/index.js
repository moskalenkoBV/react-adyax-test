import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import BasketItem from './BasketItem'
import TotalPrice from '../TotalPrice'
import Button from '../Button'
import { Translate, I18n } from 'react-redux-i18n'
import { connect } from 'react-redux'
import nextStep from '../../actions/nextStep'
import toggleLoader from '../../actions/toggleLoader'
import clearBasket from '../../actions/clearBasket'
import clearProducts from '../../actions/clearProducts'
import setStep from '../../actions/setStep'
import SubmitButton from '../Forms/FormElements/SubmitButton'
import OrderResult from '../OrderResult'
import api from '../../api'

class Basket extends Component {
  constructor(props) {
    super(props)

    this.button = {
      0: <Button text={I18n.t('buttons.nextStep')} eventHandle={this.nextStep} />,
      2: <Button text={I18n.t('buttons.order')} eventHandle={this.makeOrder} />
    }

    this.contactButton = {
      0: <SubmitButton text={I18n.t('buttons.nextStep')} formName="contactForm" />,
      1: <Button text={I18n.t('buttons.nextStep')} eventHandle={this.nextStep} />,
      2: <Button disabled={true} text={I18n.t('buttons.nextStep')} />
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  state = {
    timerSize: 5,
    orderStatus: false,
    orderStatusData: {}
  }

  nextStep = () => {
    this.props.nextStep()
    window.scrollTo(0,0)
  }

  resetApp = () => {
    this.props.clearBasket()
    this.props.clearProducts()
    this.props.setStep(0)
  }

  timer = () => new Promise(resolve => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        ...prevState,
        timerSize: prevState.timerSize - 1
      }))
    }, 1000)
    setTimeout(resolve, 5000, async () => {
      clearInterval(this.timer)
      await this.setState((prevState) => ({
        ...prevState,
        orderStatus: false,
        timerSize: 5
      }))
    })
  })

  makeOrder = async () => {
    try {
      this.props.toggleLoader()
      const data = await api.orders.make(
        this.props.userData.email, 
        this.props.products, 
        this.props.userData.firstName, 
        this.props.userData.lastName)
      await this.setState((prevState) => ({
        ...prevState,
        orderStatus: true,
        orderStatusData: { 
          result: data.result,
          message: data.message,
          status: true
        }
      }))
      this.props.toggleLoader()
      await this.timer()
      this.resetApp()
    }
    catch(e) {
      await this.setState((prevState) => ({
        ...prevState,
        orderStatus: true,
        orderStatusData: { 
          result: e.response.data.result,
          message: e.response.data.message,
          status: false
        }
      }))
      this.props.toggleLoader()
      await this.timer()
    }
  }

  render() {
    const { products, nextStep, currentStep, contactCurrentStep } = this.props
    const { orderStatus, orderStatusData, timerSize } = this.state 

    return (
      <section className="basket">
        <h2 className="section-title"><Translate value={currentStep === 2 ? "steps.2" : "basket.title"} /></h2>
        <div className="basket__wrapper">
          { products.length > 0 ?
            <Fragment>
              <div className="basket__list">
                {
                  products.map(item => (
                    <div key={item._id} className="basket__item">
                      <BasketItem 
                        _id={item._id}
                        title={item.title}
                        bonus={item.bonus}
                        amount={item.amount}
                        price={item.price}
                      />
                    </div>
                  ))
                }
              </div>
              <div className="basket__total-price">
                <TotalPrice products={products} />
              </div>
              <div className="basket__next-step">
                { currentStep === 1 ?
                  this.contactButton[contactCurrentStep]
                  :
                  this.button[currentStep]
                }
              </div>
            </Fragment>
            :
            <div className="basket__empty-message">
              <Translate value="basket.emptyMessage" />
            </div>
          }
        </div>
        { orderStatus && 
          <OrderResult 
            result={orderStatusData.result}
            message={orderStatusData.message}
            status={orderStatusData.status}
            leftTime={timerSize} 
          />
        }
      </section>
    )
  }
}

Basket.propTypes = {
  products: PropTypes.array,
  nextStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  contactCurrentStep: PropTypes.number,
  userData: PropTypes.object,
  toggleLoader: PropTypes.func,
  clearBasket: PropTypes.func,
  setStep: PropTypes.func,
  clearProducts: PropTypes.func
}

export default connect(
  (state) => ({
    products: state.basketReducer.products,
    currentStep: state.stepsReducer.currentStep,
    contactCurrentStep: state.stepsReducer.contactCurrentStep,
    userData: state.userReducer.userData
  }),
  { nextStep, toggleLoader, clearBasket, setStep, clearProducts }
)(Basket)