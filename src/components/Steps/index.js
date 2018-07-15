import React from 'react'
import PropTypes from 'prop-types'
import Products from '../Products'

const stepItems = {
  0: <Products />
}

const Steps = ({ currentStep }) => (
  <div className="steps">
    { stepItems[currentStep] }
  </div>
)

Steps.propTypes = {
  currentStep: PropTypes.number
}

export default Steps