import { 
  INIT_PRODUCTS, 
  INC_AMOUNT, 
  DEC_AMOUNT, 
  CHANGE_BONUS, 
  CLEAR_PRODUCTS,
  UPDATE_PRODUCTS
} from '../types'

const initialState = {
  products: []
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_PRODUCTS :
      return { ...state, products: action.data }; break
    case INC_AMOUNT :
      return { ...state, products: state.products.map(item => ( 
        item._id === action.id ? { ...item, amount: item.amount ? item.amount + 1 : item.min + 1 } : item 
      )) }; break
    case DEC_AMOUNT :
      return { ...state, products: state.products.map(item => (
        item._id === action.id ? { ...item, amount: item.amount - 1 } : item
      )) }; break
    case CHANGE_BONUS :
      return { ...state, products: state.products.map(item => (
        item._id === action.id ? { ...item, bonus: action.bonus } : item
      )) }; break
    case CLEAR_PRODUCTS :
      return { ...state, products: state.products.map(item => (
        { ...item, bonus: null, inBasket: false, amount: item.min }
      )) }; break
    case UPDATE_PRODUCTS :
      return { ...state, products: state.products.map(item => {
        const basketItem = action.basket.filter(itemBasket => itemBasket._id === item._id)[0]
        return basketItem ? { ...item, amount: basketItem.amount, bonus: basketItem.bonus } : item
      }) }; break
    default : 
      return state
  }
}

export default productsReducer