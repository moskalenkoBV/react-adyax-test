import React from 'react'

const AmountControl = () => (
  <div className="amount-control">
    <button className="amount-control__button amount-control__button--dec"></button>
    <span className="amount-control__current-amount">5</span>
    <button className="amount-control__button amount-control__button--inc"></button>
  </div>
)

export default AmountControl