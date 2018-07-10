import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    const { itemId, itemKey, name, description, min, max, price, incQuantity, decQuantity, currentQuantity } = this.props

    return (
      <article className="product">
        <div className="product__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="product__control">
          <div className="product__quantity">
            <button disabled={currentQuantity === min} onClick={() => decQuantity(itemKey)}>-</button>
            <span>{ currentQuantity }</span>
            <button disabled={currentQuantity === max} onClick={() => incQuantity(itemKey)}>+</button>
          </div>
        </div>
      </article>
    )
  }
}

//{itemId, name, description, min, max, price}

Product.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemKey: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  incQuantity: PropTypes.func.isRequired,
  decQuantity: PropTypes.func.isRequired
}

export default Product