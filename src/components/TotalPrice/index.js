import React from 'react'
import PropTypes from 'prop-types'
import { Translate, Localize } from 'react-redux-i18n'
import calcPriceTotal from '../../helpers/calcPriceTotal'

const TotalPrice = ({ products }) => (
  <table className="total-price">
    <tbody>
      <tr>
        <td><Translate value="basket.totalPrice" />:</td>
        <td>
          <Localize 
            value={calcPriceTotal(products)} 
            options={{ style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }} 
          /> 
        </td>
      </tr>
    </tbody>
  </table>
)

TotalPrice.propTypes = {
  products: PropTypes.array
}

export default TotalPrice

