import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({text, formName}) => (
  <button className="button" type="submit" form={formName}>{text}</button>
)

SubmitButton.propTypes = {
  text: PropTypes.string,
  formName: PropTypes.string
}

export default SubmitButton