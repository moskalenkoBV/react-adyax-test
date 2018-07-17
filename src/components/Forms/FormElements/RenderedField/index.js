import React from 'react'
import PropTypes from 'prop-types'

const RenderedField = ({ input, label, type, placeholder, meta: { error } }) => (
  <div className={`form-field${error ? ' form-field--error' : ''}`}>
    { label && <label>{label}</label> }
    <input {...input} placeholder={ placeholder } type={type ? type : 'text'} />
    { error && <span className="form-field__error">{error}</span> }
  </div>
)

RenderedField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
}

export default RenderedField