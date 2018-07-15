import React from 'react'
import PropTypes from 'prop-types'
import { Translate } from 'react-redux-i18n'

const Basket = () => (
  <section className="basket">
    <h2 className="basket__title"><Translate value="basket.title" /></h2>
    <div className="basket__list">
      <div className="basket__item">
        
      </div>
    </div>
  </section>
)

export default Basket