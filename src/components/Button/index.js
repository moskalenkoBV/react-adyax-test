import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ eventHandle, text }) => (
  <button onClick={eventHandle} className="button">{ text }</button>
)

Button.propTypes = {
  eventHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
