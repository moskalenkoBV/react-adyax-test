import { GET_PRODUCTS } from '../types'
import api from '../api'

const getProductsAction = (data) => ({
  type: GET_PRODUCTS,
  data
})

const getProducts = () => dispatch => {
  api.products.get().then(data => dispatch(getProductsAction(data)))
}

export default getProducts