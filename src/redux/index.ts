import { combineReducers } from 'redux'
import { authReducer, smeReducer, currentUserReducer } from './reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  sme: smeReducer,
  currentUser: currentUserReducer,
})

export default rootReducer
