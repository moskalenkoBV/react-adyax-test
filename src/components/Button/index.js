import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Button = ({ eventHandle, text}) => (
  <button type="button" onClick={eventHandle} className="button">{ text }</button>
)

Button.propTypes = {
  eventHandle: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Button
