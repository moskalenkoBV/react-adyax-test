import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import BasketItem from './BasketItem'
import TotalPrice from '../TotalPrice'
import Button from '../Button'
import { Translate, I18n } from 'react-redux-i18n'
import { connect } from 'react-redux'
import nextStep from '../../actions/nextStep'
import SubmitButton from '../Forms/FormElements/SubmitButton'
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

  nextStep = () => {
    this.props.nextStep()
    window.scrollTo(0,0)
  }

  makeOrder = () => {
    api.orders.make(this.props.userEmail, this.props.products).then(res => {
      console.log(res.result, res.message)
    })
  }

  render() {
    const { products, nextStep, currentStep, contactCurrentStep } = this.props

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
      </section>
    )
  }
}

Basket.propTypes = {
  products: PropTypes.array,
  nextStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  contactCurrentStep: PropTypes.number,
  userEmail: PropTypes.string
}

export default connect(
  (state) => ({
    products: state.basketReducer.products,
    currentStep: state.stepsReducer.currentStep,
    contactCurrentStep: state.stepsReducer.contactCurrentStep,
    userEmail: state.userReducer.userData.email
  }),
  { nextStep }
)(Basket)