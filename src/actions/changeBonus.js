import { CHANGE_BONUS_BASKET } from '../reducers/basketReducer'
import { CHANGE_BONUS_PRODUCTS } from '../reducers/productsReducer'

const changeBonus = (id, bonus) => (dispatch, getState) => {
  const state = {
    basket: getState().basketReducer,
    products: getState().productsReducer
  }

  if(localStorage.getItem('basket')) {
    const basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray.forEach(item => {
      if(item._id === id) {
        item.bonus = bonus
        return
      }
    })
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }

  dispatch([
    {
      type: CHANGE_BONUS_BASKET,
      state: {
        ...state.basket,
        products: updateState(state.basket.products, id, bonus)
      }
    },
    {
      type: CHANGE_BONUS_PRODUCTS,
      state: {
        ...state.products,
        products: updateState(state.products.products, id, bonus)
      }
    }
  ])
}

const updateState = (elems, id, bonus) => (
  elems.map(item => (
    item._id === id ? { ...item, bonus: bonus } : item
  ))
)

export default changeBonus