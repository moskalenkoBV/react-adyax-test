import BasketCollapsed from './BasketCollapsed'
import { connect } from 'react-redux'
import toggleBasket from '../../actions/toggleBasket'
 
export default connect(
  (state) => ({
    products: state.basketReducer.products,
    isBasketOpened: state.basketReducer.isOpened
  }),
  { toggleBasket }
)(BasketCollapsed)