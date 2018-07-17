import React from 'react'
import PropTypes from 'prop-types'
import BasketItem from './BasketItem'
import TotalPrice from '../TotalPrice'
import Button from '../Button'
import { Translate, I18n } from 'react-redux-i18n'
import { connect } from 'react-redux'
import nextStep from '../../actions/nextStep'

class Basket extends React.Component {

  nextStep = () => {
    switch(this.props.currentStep) {
      case 0 :
        this.props.nextStep()
        window.scrollTo(0,0)
        break
      case 1 :
        alert(25)
        break
    }
  }

  render() {
    const { products, nextStep } = this.props

    return (
      <section className="basket">
        <h2 className="section-title"><Translate value="basket.title" /></h2>
        <div className="basket__wrapper">
          { products.length > 0 ?
            <div>
              <div className="basket__list">
                {
                  products.map(item => (
                    <div key={item.id} className="basket__item">
                      <BasketItem 
                        id={item.id}
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
                <Button text={I18n.t('buttons.nextStep')} eventHandle={this.nextStep} />
              </div>
            </div>
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
  currentStep: PropTypes.number.isRequired
}

export default connect(
  (state) => ({
    products: state.basketReducer.products,
    currentStep: state.stepsReducer.currentStep
  }),
  { nextStep }
)(Basket)