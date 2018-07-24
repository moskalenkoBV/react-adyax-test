import { 
  ADD_PRODUCT, 
  DEL_PRODUCT, 
  INC_AMOUNT, 
  DEC_AMOUNT, 
  CHANGE_BONUS,
  CLEAR_BASKET,
  UPDATE_BASKET
} from '../types'

const initialState = {
  products: []
}

const basketReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT :
      return { ...state, products: [ ...state.products, action.data ] }; break
    case DEL_PRODUCT :
      return { ...state, products: state.products.filter( item => item._id !== action.id ) }; break
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
    case CLEAR_BASKET :
      return { ...state, products: [] }; break
    case UPDATE_BASKET :
      return { ...state, products: action.data }; break
    default :
      return state
  }
}

export default basketReducer