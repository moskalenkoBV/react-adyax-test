import {SET_PRODUCTS} from '../types'
import api from '../api'

export const setProductsAction = (products) => {
	return {
		type: SET_PRODUCTS,
		products
	}
}

export const setProducts = () => (dispatch) => {
	api.products.get().then(data => { dispatch(setProductsAction(data)) })
}