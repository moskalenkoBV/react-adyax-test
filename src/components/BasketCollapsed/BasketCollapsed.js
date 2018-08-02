import React from 'react'
import PropTypes from 'prop-types'
import Icon from './basket.svg'

const BasketCollapsed = ({toggleBasket, products, isBasketOpened}) => (
  <button disabled={products.length === 0} onClick={toggleBasket} className={`basket-collapsed${products.length > 0 ? ' basket-collapsed--with-items' : ''}`}>
    { isBasketOpened ?
      <div className="basket-collapsed__close"></div>
      :
      <Icon />
    }
    { (products.length > 0 && !isBasketOpened ) && <div className="basket-collapsed__count">{products.length}</div> }
  </button>
)

BasketCollapsed.propTypes = {
  toggleBasket: PropTypes.func,
  products: PropTypes.array,
  isBasketOpened: PropTypes.bool
}

export default BasketCollapsed