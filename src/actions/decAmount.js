import { DEC_AMOUNT_BASKET } from '../reducers/basketReducer'
import { DEC_AMOUNT_PRODUCTS } from '../reducers/productsReducer'

const decAmount = id => (dispatch, getState) => {
  const state = {
    basket: getState().basketReducer,
    products: getState().productsReducer
  }

  if(localStorage.getItem('basket')) {
    const basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray.forEach(item => {
      if(item._id === id) {
        item.amount -= 1
        return
      }
    })
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }

  dispatch([
    {
      type: DEC_AMOUNT_BASKET,
      state: {
        ...state.basket,
        products: updateState(state.basket.products, id)
      }
    },
    {
      type: DEC_AMOUNT_PRODUCTS,
      state: {
        ...state.products,
        products: updateState(state.products.products, id)
      }
    }
  ])
}

const updateState = (elems, id) => (
  elems.map(item => ( 
    item._id === id ? { ...item, amount: item.amount - 1 } : item 
  ))
)

export default decAmount