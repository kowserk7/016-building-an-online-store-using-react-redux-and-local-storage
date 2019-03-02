import {createStore, combineReducers} from 'redux';
import cartReducer  from '../features/cart/reducer'

const rootReducder = combineReducers ({
  cart: cartReducer
})

const store = createStore(
  rootReducder,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store