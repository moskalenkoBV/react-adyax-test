import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
import setStep from '../../actions/setStep'

class Navigation extends React.Component {

  render() {
    // couldn't bind setStep
    const { currentStep, steps, setStep } = this.props

    return (
      <div className="navigation">
        {
          Object.keys(steps).map((item, index) => (
            <NavigationItem 
              key={index}
              text={steps[item]}
              id={index}
              currentStep={currentStep}
              setStep={setStep}
            />
          ))
        }
      </div>
    )
  }
}

Navigation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    currentStep: state.stepsReducer.currentStep,
    steps: state.stepsReducer.steps
  }), { setStep }
)(Navigation)