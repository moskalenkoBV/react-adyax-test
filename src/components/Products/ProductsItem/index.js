import React from 'react'
import PropTypes from 'prop-types'
import { I18n, Translate } from 'react-redux-i18n'
import Select from 'react-select'
import AmountControl from '../../AmountControl'

class ProductsItem extends React.Component {
  state = {
    selectedBonus: ''
  }

  changeBonus = selectedBonus => {
    this.setState({ selectedBonus });
  }

  render() {
    const { id, title, description, price, min, max, amount, inBasket, bonus } = this.props
    const { selectedBonus } = this.state

    return (
      <article className="products-item">
        <div className="products-item__info">
          <h3>{title}</h3>
          { description && <p className="products-item__description">{description}</p> }
          <Select 
            value={selectedBonus}
            options={Object.values(I18n.t('bonuses.items'))}
            onChange={this.changeBonus} 
            placeholder={I18n.t('bonuses.placeholder')}
            clearValueText={I18n.t('bonuses.removeBonusText')}
            noResultsText={I18n.t('bonuses.noResultsText')}
            className="products-item__bonus"
          />
        </div>
        <div className="products-item__control">
          <div>
            <label></label>
            <input type="checkbox" />
          </div>
          <AmountControl />
        </div>
      </article>
    )
  }
}

ProductsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  inBasket: PropTypes.bool.isRequired,
  bonus: PropTypes.number.isRequired
}

export default ProductsItem