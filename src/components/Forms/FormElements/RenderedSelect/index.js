import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const RenderedSelect = ({ input, label, options, meta: {error} }) => (
  <div className={`form-field${error ? ' form-field--error' : ''}`}>
    { label && <label>{label}</label> }
    <Select
      value={input.value}
      onChange={input.onChange}
      onBlur={() => input.onBlur(input.value)}
      options={options}
      placeholder="Select" 
    />
    { error && <span className="form-field__error">{error}</span> }
  </div>
)

RenderedSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
}

export default RenderedSelect