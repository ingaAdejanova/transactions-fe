import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actionTypes'

export type AuthActionTypes =
  | { type: typeof LOGIN_REQUEST }
  | { type: typeof LOGIN_SUCCESS; payload: string }
  | { type: typeof LOGIN_FAILURE; payload: string }
  | { type: typeof LOGOUT }
