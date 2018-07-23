import React from 'react'
import PropTypes from 'prop-types'
import { I18n, Translate } from 'react-redux-i18n'
import Select from 'react-select'
import AmountControl from '../../AmountControl'
import CustomCheckbox from '../../Forms/FormElements/CustomCheckbox'
import ProductPrice from '../../ProductPrice'

class ProductsItem extends React.Component {
  state = {
    selectedBonus: ''
  }

  changeBonus = selectedBonus => {
    this.setState({ selectedBonus });
    this.props.changeBonus(this.props._id, selectedBonus)
  }

  incAmount = () => (
    this.props.incAmount(this.props._id)
  )

  decAmount = () => (
    this.props.decAmount(this.props._id)
  )

  changeProductState = isChecked => {
    const productData = {
      _id: this.props._id,
      amount: this.props.amount,
      bonus: this.props.bonus,
      price: this.props.price,
      title: this.props.title
    }
    isChecked ? this.props.addProduct(productData) : this.props.delProduct(this.props._id)
  }

  render() {
    const { _id, title, description, price, min, max, amount, inBasket, bonus } = this.props

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
          <div className="products-item__checkbox">
            <CustomCheckbox initialChecked={inBasket} onChangeHandle={this.changeProductState} />
          </div>
          <div className="products-item__amount">
            <AmountControl 
              amount={amount} 
              min={min} 
              max={max} 
              incHandle={this.incAmount} 
              decHandle={this.decAmount}
            />
          </div>
          <div className="products-item__price">
            <ProductPrice
              price={price}
              amount={amount}
              bonus={bonus}
            />
          </div>
        </div>
      </article>
    )
  }
}

ProductsItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  inBasket: PropTypes.bool.isRequired,
  bonus: PropTypes.any,
  incAmount: PropTypes.func.isRequired,
  decAmount: PropTypes.func.isRequired,
  changeBonus: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  delProduct: PropTypes.func.isRequired
}

export default ProductsItem