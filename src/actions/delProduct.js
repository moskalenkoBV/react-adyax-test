import { DEL_PRODUCT } from '..types'

const delProduct = id => dispatch => {
  dispatch({
    type: DEL_PRODUCT,
    id
  })
}

export default delProduct