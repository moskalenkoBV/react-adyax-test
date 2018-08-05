import createReducer from '../helpers/createReducer'

export const INIT_PRODUCTS = 'INIT_PRODUCTS'
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS'
export const CHANGE_BONUS_PRODUCTS = 'CHANGE_BONUS_PRODUCTS'
export const INC_AMOUNT_PRODUCTS = 'INC_AMOUNT_PRODUCTS'
export const DEC_AMOUNT_PRODUCTS = 'DEC_AMOUNT_PRODUCTS'

const initialState = {
  products: []
}

const productsReducer = createReducer({}, {
  INIT_PRODUCTS: (state, action) => ({ ...state, ...action.state }),
  INC_AMOUNT_PRODUCTS: (state, action) => ({ ...state, ...action.state }),
  DEC_AMOUNT_PRODUCTS: (state, action) => ({ ...state, ...action.state }),
  CHANGE_BONUS_PRODUCTS: (state, action) => ({ ...state, ...action.state }),
  CLEAR_PRODUCTS: (state, action) => ({ ...state, ...action.state }),
  UPDATE_PRODUCTS: (state, action) => ({ ...state, ...action.state })
})

// const productsReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case INIT_PRODUCTS :
//       return { ...state, products: action.data }; break
//     case INC_AMOUNT :
//       return { ...state, products: state.products.map(item => ( 
//         item._id === action.id ? { ...item, amount: item.amount ? item.amount + 1 : item.min + 1 } : item 
//       )) }; break
//     case DEC_AMOUNT :
//       return { ...state, products: state.products.map(item => (
//         item._id === action.id ? { ...item, amount: item.amount - 1 } : item
//       )) }; break
//     case CHANGE_BONUS :
//       return { ...state, products: state.products.map(item => (
//         item._id === action.id ? { ...item, bonus: action.bonus } : item
//       )) }; break
//     case CLEAR_PRODUCTS :
//       return { ...state, products: state.products.map(item => (
//         { ...item, bonus: null, inBasket: false, amount: item.min }
//       )) }; break
//     case UPDATE_PRODUCTS :
//       return { ...state, products: state.products.map(item => {
//         const basketItem = action.basket.filter(itemBasket => itemBasket._id === item._id)[0]
//         return basketItem ? { ...item, amount: basketItem.amount, bonus: basketItem.bonus } : item
//       }) }; break
//     default : 
//       return state
//   }
// }

export default (state = initialState, action) => (productsReducer(state, action))