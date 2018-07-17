import React from 'react'
import PropTypes from 'prop-types'
import Products from '../Products'
import ContactDetails from '../ContactDetails'

const stepItems = {
  0: <Products />,
  1: <ContactDetails />
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