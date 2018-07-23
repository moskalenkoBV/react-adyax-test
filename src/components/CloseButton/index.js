import React from 'react'
import PropTypes from 'prop-types'

const CloseButton = ({ eventHandle }) => (
  <button className="close-button" type="button" onClick={eventHandle}></button>
)

CloseButton.propTypes = {
  eventHandle: PropTypes.func
}

export default CloseButton