import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Button = ({ eventHandle, text, disabled}) => (
  <button disabled={disabled ? true : false} type="button" onClick={eventHandle} className="button">{ text }</button>
)

Button.propTypes = {
  eventHandle: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button
