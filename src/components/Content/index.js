import React from 'react'
import PropTypes from 'prop-types'
import Steps from '../Steps'
import Basket from '../Basket'
import { connect } from 'react-redux'

const Content = ({ currentStep, isBasketOpened }) => (
  <div className="content">
    <div className="content__steps">
      <Steps currentStep={currentStep} />
    </div>
    { currentStep < 2 &&
      <div className={`content__basket${isBasketOpened ? ' content__basket--open' : ''}`}>
        <Basket />
      </div>
    }
  </div>
)

Content.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isBasketOpened: PropTypes.bool
}

export default connect(
  (state) => ({
    currentStep: state.stepsReducer.currentStep,
    isBasketOpened: state.basketReducer.isOpened
  })
)(Content)