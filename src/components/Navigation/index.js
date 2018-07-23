import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
import setStep from '../../actions/setStep'

class Navigation extends React.Component {

  render() {
    const { currentStep, steps, setStep } = this.props

    return (
      <div className="navigation">
        {
          steps.map((item, index) => (
            <NavigationItem 
              key={index} // index won't change
              text={item}
              _id={index} // index won't change
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
  steps: PropTypes.array.isRequired,
  setStep: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    currentStep: state.stepsReducer.currentStep,
    steps: state.stepsReducer.steps
  }), { setStep }
)(Navigation)