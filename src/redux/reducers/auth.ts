import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actionTypes'
import { AuthActionTypes } from '../types/auth'

export type AuthState = {
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,
}

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null }
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isLoading: false }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      }
    case LOGOUT:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}
