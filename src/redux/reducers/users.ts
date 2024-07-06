import {
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_FAILURE,
} from '../actionTypes'
import { UsersActionTypes } from '../types/users'

const initialState = {
  user: {
    name: '',
    profileImage: '',
  },
  isLoading: false,
  error: null,
}

export const currentUserReducer = (
  state = initialState,
  action: UsersActionTypes
) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_REQUEST:
      return { ...state, isLoading: true, error: null }
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload }
    case FETCH_CURRENT_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}
