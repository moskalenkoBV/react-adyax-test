import React from 'react'
import PropTypes from 'prop-types'

const AmountControl = ({ amount, min, max, incHandle, decHandle }) => (
  <div className="amount-control">
    <button disabled={amount === min} onClick={ () => { decHandle() } } className="amount-control__button amount-control__button--dec"></button>
    <span className="amount-control__current-amount">{amount}</span>
    <button disabled={amount === max} onClick={ () => { incHandle() } } className="amount-control__button amount-control__button--inc"></button>
  </div>
)

AmountControl.propTypes = {
  amount: PropTypes.number.isRequired,
  incHandle: PropTypes.func.isRequired,
  decHandle: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default AmountControl