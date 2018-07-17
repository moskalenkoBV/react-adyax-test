import React from 'react'
import PropTypes from 'prop-types'

const CustomCheckbox = ({ onChangeHandle }) => (
  <label className="custom-checkbox">
    <input onChange={ e => onChangeHandle(e.target.checked) } className="custom-checkbox__input" type="checkbox" />
    <span className="custom-checkbox__checkmark"></span>
    <div className="custom-checkbox__outline"></div>
  </label>
)

CustomCheckbox.propTypes = {
  onChangeHandle: PropTypes.func.isRequired
}

export default CustomCheckbox