import React from 'react'

const NavigationItem = ({ id, currentStep, text, setStep }) => (
  <button 
    className={`navigation-item${id === currentStep ? ' navigation-item--active' : ''}`}
    onClick={ () => { setStep(id) } }
  >{text}</button>
)

export default NavigationItem