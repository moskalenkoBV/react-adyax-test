import { CHANGE_ACTIVE_PRODUCT } from '../types'

export default (idKey) => (dispatch, getState) => {
	
	const state = getState().products
	dispatch({
		type: CHANGE_ACTIVE_PRODUCT,
		state: {
			...state,
			items: state.items.map((item) => {
				if(item.id === idKey) {
					return { ...item, checked: item.checked ? !item.checked : true }
				}
				else {
					return item
				}
			})
		}
	})
}