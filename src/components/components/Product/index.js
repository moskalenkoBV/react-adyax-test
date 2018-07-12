import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ 
  itemId,
  title,
  description,
  min,
  max,
  price,
  quantity,
  incQuantity,
  decQuantity,
  changeState
}) => (
  <article className="product">
    <div className="product__info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="product__control">
      <div className="product__basket">
        <input type="checkbox" onChange={() => { changeState(itemId) }} />
      </div>
      <div className="product__quantity">
        <button disabled={quantity === min} onClick={() => { decQuantity(itemId) }}>-</button>
        <span>{ quantity }</span>
        <button disabled={quantity === max} onClick={() => { incQuantity(itemId) }}>+</button>
      </div>
    </div>
  </article>
)

Product.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  incQuantity: PropTypes.func.isRequired,
  decQuantity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired
}

export default Product