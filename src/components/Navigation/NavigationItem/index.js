import React from 'react'
import PropTypes from 'prop-types'

const NavigationItem = ({ _id, currentStep, text, setStep }) => (
  <button 
    disabled={_id >= currentStep}
    className={`navigation-item${_id == currentStep ? ' navigation-item--active' : ''}`}
    onClick={ () => { setStep(_id) } }
  >
    {text}
  </button>
)

NavigationItem.propTypes = {
  _id: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired
}

export default NavigationItem