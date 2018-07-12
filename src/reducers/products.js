import { SET_PRODUCTS, INC_QUANTITY, DEC_QUANTITY, CHANGE_ACTIVE_PRODUCT } from '../types'

export default (state = { 'items': {} }, action) => {
	switch(action.type) {
		case SET_PRODUCTS:
			state = {
				...state,
				items: action.products
			}
			break
		case INC_QUANTITY:
			state = action.state
			break
		case DEC_QUANTITY:
			state = action.state
			break
		case CHANGE_ACTIVE_PRODUCT:
			state = action.state
	}
	return state
}
