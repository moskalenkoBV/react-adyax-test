import React from 'react'
import PropTypes from 'prop-types'
import { Localize } from 'react-redux-i18n'
import calcPriceSingle from '../../helpers/calcPriceSingle'

const ProductPrice = ({ price, amount, bonus }) => (
  <div className="product-price">
    <Localize 
      value={ calcPriceSingle(price, amount, bonus) } 
      options={{ style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }} 
    />
  </div>
)

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  bonus: PropTypes.any
}

export default ProductPrice