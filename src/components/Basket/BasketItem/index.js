import React from 'react'
import PropTypes from 'prop-types'
import { Translate, Localize } from 'react-redux-i18n'
import calcPriceSingle from '../../../helpers/calcPriceSingle'

const BasketItem = ({ _id, title, bonus, amount, price }) => (
  <article className="basket-item">
    <h3>{title}</h3>
    <table>
      <tbody>
        { bonus !== null && 
          <tr>
            <td><Translate value="basket.bonus" />:</td>
            <td>{bonus.label}</td>
          </tr>
        }
        <tr>
          <td><Translate value="basket.amount" />:</td>
          <td>{amount}</td>
        </tr>
        <tr>
          <td><Translate value="basket.price" />:</td>
          <td className="basket-item__price">
            <Localize 
              value={ calcPriceSingle(price, amount, bonus) } 
              options={{ style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }} 
            />    
          </td>
        </tr>
      </tbody>
    </table>
  </article>
)

BasketItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bonus: PropTypes.any,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}

export default BasketItem