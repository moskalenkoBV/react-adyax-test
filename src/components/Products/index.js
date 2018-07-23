import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import ProductsItem from './ProductsItem'
import incAmount from '../../actions/incAmount'
import decAmount from '../../actions/decAmount'
import changeBonus from '../../actions/changeBonus'
import addProduct from '../../actions/addProduct'
import delProduct from '../../actions/delProduct'

const Products = ({ products, incAmount, decAmount, changeBonus, addProduct, delProduct, basket }) => (
  <section className="products">
    <h2 className="section-title"><Translate value="steps.0" /></h2>
    <div className="products__list">
      {
        products.map((item) => (
          <div key={item._id} className="products__item">
            <ProductsItem 
              _id={item._id}
              title={item.title}
              description={item.description}
              price={parseFloat(item.price)}
              min={item.min}
              max={item.max}
              amount={item.amount ? item.amount : item.min}
              bonus={item.bonus ? item.bonus : null}
              incAmount={incAmount}
              decAmount={decAmount}
              changeBonus={changeBonus}
              addProduct={addProduct}
              delProduct={delProduct}
              inBasket={!!(basket.filter(basketItem => basketItem._id === item._id)).length}
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
  changeBonus: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  delProduct: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    products: state.productsReducer.products,
    basket: state.basketReducer.products
  }),
  { incAmount, decAmount, changeBonus, addProduct, delProduct }
)(Products)