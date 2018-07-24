import React from 'react'
import PropTypes from 'prop-types'
import Products from '../Products'
import ContactDetails from '../ContactDetails'
import Confirmation from '../Confirmation'

const stepItems = {
  0: <Products />,
  1: <ContactDetails />,
  2: <Confirmation />
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