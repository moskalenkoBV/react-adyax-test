import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text, status }) => (
  <div className={`message${status ? `message--${status}` : ''}`}>{text}</div>
)

Message.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string
}

export default Message