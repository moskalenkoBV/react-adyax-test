import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, label, multiple, onChangeFunc }) => (
  <div className="select">
    { console.log(options) }
    { label && <label>{ label }</label> }
    <select onChange={onChangeFunc}>
      {
        Object.keys(options).map((item) => (
          <option
            key={item}
            value={options[item].value}
          >
            {options[item].name}
          </option>
        ))
      }
    </select>
  </div>
)

Select.propTypes = {
  label: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.object,
  onChangeFunc: PropTypes.func
}

export default Select