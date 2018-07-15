import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import ProductsItem from './ProductsItem'

const Products = ({ products }) => (
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
              price={item.price}
              min={item.min}
              max={item.max}
              amount={item.amount ? item.amount : item.min}
              inBasket={item.checked ? item.checked : false}
              bonus={item.bonus ? item.bonus : 1}
            />
          </div>
        ))
      }
    </div>
  </section>
)

Products.propTypes = {
  products: PropTypes.array
}

export default connect(
  (state) => ({
    products: state.productsReducer.products
  })
)(Products)