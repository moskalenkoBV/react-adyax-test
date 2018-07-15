import React from 'react'

const CustomCheckbox = () => (
  <label className="custom-checkbox">
    <input className="custom-checkbox__input" type="checkbox" />
    <span className="custom-checkbox__checkmark"></span>
    <div className="custom-checkbox__outline"></div>
  </label>
)

export default CustomCheckbox