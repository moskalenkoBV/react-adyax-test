import React from 'react'
import PropTypes from 'prop-types'

const OrderResult = ({ result, message, status, leftTime }) => (
  <div className={`order-result${status ? " order-result--positive" : " order-result--negative"}`}>
    <div className="order-result__card">
      <div className="order-result__result">{result}</div>
      <div className="order-result__message">{message}</div>
      <div className="order-result__status"><span>{leftTime}</span></div>
    </div>
  </div>
)

OrderResult.propTypes = {
  result: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.bool,
  leftTime: PropTypes.number
}

export default OrderResult