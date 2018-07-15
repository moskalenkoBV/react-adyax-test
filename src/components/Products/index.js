import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import ProductsItem from './ProductsItem'
import incAmount from '../../actions/incAmount'
import decAmount from '../../actions/decAmount'
import changeBonus from '../../actions/changeBonus'

const Products = ({ products, incAmount, decAmount, changeBonus }) => (
  <section className="products">
    <h2 className="products__title"><Translate value="steps.0" /></h2>
    <div className="products__list">
      {
        products.map((item) => (
          <div key={item.id} className="products__item">
            <ProductsItem 
              id={item.id}
              title={item.title}
              description={item.description}
              price={parseFloat(item.price)}
              min={item.min}
              max={item.max}
              amount={item.amount ? item.amount : item.min}
              inBasket={item.checked ? item.checked : false}
              bonus={item.bonus ? item.bonus : null}
              incAmount={incAmount}
              decAmount={decAmount}
              changeBonus={changeBonus}
            />
          </div>
        ))
      }
    </div>
  </section>
)

Products.propTypes = {
  products: PropTypes.array,
  incAmount: PropTypes.func.isRequired,
  decAmount: PropTypes.func.isRequired,
  changeBonus: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    products: state.productsReducer.products
  }),
  { incAmount, decAmount, changeBonus }
)(Products)