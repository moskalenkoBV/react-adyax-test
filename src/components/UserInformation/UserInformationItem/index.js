import React from 'react'
import PropTypes from 'prop-types'

const UserInformationItem = ({label, value}) => (
  <div className="user-information-item">
    <div className="user-information-item__label">{label}</div>
    <div className="user-information-item__value">{value}</div>
  </div>
)

UserInformationItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default UserInformationItem