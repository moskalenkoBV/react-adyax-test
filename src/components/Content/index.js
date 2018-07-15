import React from 'react'
import PropTypes from 'prop-types'
import Steps from '../Steps'
import Basket from '../Basket'
import { connect } from 'react-redux'

const Content = ({ currentStep }) => (
  <div className="content">
    <div className="content__steps">
      <Steps currentStep={currentStep} />
    </div>
    <div className="content__basket">
      <Basket />
    </div>
  </div>
)

Content.propTypes = {
  currentStep: PropTypes.number.isRequired
}

export default connect(
  (state) => ({
    currentStep: state.stepsReducer.currentStep
  })
)(Content)