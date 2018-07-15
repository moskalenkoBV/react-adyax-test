import React from 'react'
import PropTypes from 'prop-types'

const NavigationItem = ({ id, currentStep, text, setStep }) => (
  <button 
    className={`navigation-item${id == currentStep ? ' navigation-item--active' : ''}`}
    onClick={ () => { setStep(id) } }
  >
    {text}
  </button>
)

NavigationItem.propTypes = {
  id: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired
}

export default NavigationItem