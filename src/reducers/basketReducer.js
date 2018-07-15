import { ADD_PRODUCT, DEL_PRODUCT } from '../types'

const initialState = {
  items: [],
  totalPrice: 25.00
}

const basketReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT :
      return { ...state, items: [ ...state.items, action.data ] }; break
    case DEL_PRODUCT :
      return { ...state, items: state.items.filter((item, index) => index !== action.id) }; break
    default :
      return state
  }
}

export default basketReducer