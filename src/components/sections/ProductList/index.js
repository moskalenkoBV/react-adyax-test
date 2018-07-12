import React from 'react'
import Product from '../../components/Product'
import { connect } from 'react-redux'
import incQuantity from '../../../actions/incQuantity'
import decQuantity from '../../../actions/decQuantity'
import changeActiveProduct from '../../../actions/changeActiveProduct'

const ProductList = ({ products, incQuantity, decQuantity, changeActiveProduct }) => (
  <section className="product-list">
    <h2>Product list</h2>
    <div className="product-list__items">
      {
        products.length > 0 && (
          products.map((item, index) => (
            <Product
              key={index}
              itemId={item.id}
              title={item.title}
              description={item.description}
              min={item.min}
              max={item.max}
              price={item.price}
              quantity={item.quantity ? item.quantity : item.min}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
              changeState={changeActiveProduct}
            />
          ))
        )
      }
    </div>
  </section>
)

export default connect(
  (state) => (
    {products: state.products.items}
  ),
  { incQuantity, decQuantity, changeActiveProduct }

)(ProductList)