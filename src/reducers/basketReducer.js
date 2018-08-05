import createReducer from '../helpers/createReducer'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DEL_PRODUCT = 'DEL_PRODUCT'
export const INC_AMOUNT_BASKET = 'INC_AMOUNT_BASKET'
export const DEC_AMOUNT_BASKET = 'DEC_AMOUNT_BASKET'
export const CHANGE_BONUS_BASKET = 'CHANGE_BONUS_BASKET'
export const CLEAR_BASKET = 'CLEAR_BASKET'
export const UPDATE_BASKET = 'UPDATE_BASKET'
export const TOGGLE_BASKET = 'TOGGLE_BASKET'

const initialState = {
  products: [],
  isOpened: false
}

const basketReducer = createReducer({}, {
  ADD_PRODUCT: (state, action) => ({ ...state, ...action.state }),
  DEL_PRODUCT: (state, action) => ({ ...state, ...action.state }),
  INC_AMOUNT_BASKET: (state, action) => ({ ...state, ...action.state }),
  DEC_AMOUNT_BASKET: (state, action) => ({ ...state, ...action.state }),
  CHANGE_BONUS_BASKET: (state, action) => ({ ...state, ...action.state }),
  CLEAR_BASKET: (state, action) => ({ ...state, ...action.state }),
  UPDATE_BASKET: (state, action) => ({ ...state, ...action.state }),
  TOGGLE_BASKET: (state, action) => ({ ...state, ...action.state })
})

// const basketReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case ADD_PRODUCT :
//       return { ...state, products: [ ...state.products, action.data ] }; break
//     case DEL_PRODUCT :
//       return { ...state, products: state.products.filter( item => item._id !== action.id ) }; break
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
//     case CLEAR_BASKET :
//       return { ...state, products: [] }; break
//     case UPDATE_BASKET :
//       return { ...state, products: action.data }; break
//     case TOGGLE_BASKET :
//       return { ...state, isOpened: !state.isOpened }; break
//     default :
//       return state
//   }
// }

export default (state = initialState, action) => (basketReducer(state, action))