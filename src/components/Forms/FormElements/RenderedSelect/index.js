import React from 'react'
import Select from 'react-select'

const RenderedSelect = ({ input, label, options, meta: {error} }) => (
  <div className="form-field">
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

export default RenderedSelect