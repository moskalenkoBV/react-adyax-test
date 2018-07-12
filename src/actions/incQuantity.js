import { INC_QUANTITY } from '../types'

export default (idKey) => (dispatch, getState) => {
	const state = getState().products

	dispatch({
		type: INC_QUANTITY,
		state: {
			...state,
			items: state.items.map(item => {
				if(item.id === idKey) {
					return { ...item, quantity: item.quantity ? item.quantity + 1 : item.min + 1}
				}
				else {
					return item
				}
			})
		}
	})
}