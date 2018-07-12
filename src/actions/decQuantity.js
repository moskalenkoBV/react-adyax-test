import { DEC_QUANTITY } from '../types'

export default (idKey) => (dispatch, getState) => {
	const state = getState().products

	dispatch({
		type: DEC_QUANTITY,
		state: {
			...state,
			items: state.items.map(item => {
				if(item.id === idKey) {
					return { ...item, quantity: item.quantity - 1}
				}
				else {
					return item
				}
			})
		}
	})
}