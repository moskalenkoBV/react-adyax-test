import React from 'react'
import PropTypes from 'prop-types'

const StepsItem = ({ number, title, active }) => (
  <button data-number={number} className={`steps-item ${active ? 'steps-item--active': ''}`}>{title}</button>
)

StepsItem.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default StepsItem