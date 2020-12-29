import { combineReducers } from 'redux'
import productReducer from './product'
import userReducer from './user'

export default combineReducers({
  user: userReducer,
  product: productReducer,
})
