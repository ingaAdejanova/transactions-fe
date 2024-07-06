import { User } from '../../types'
import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
} from '../actionTypes'

export type UsersActionTypes =
  | { type: typeof FETCH_CURRENT_USER_REQUEST }
  | { type: typeof FETCH_CURRENT_USER_SUCCESS; payload: User }
  | { type: typeof FETCH_CURRENT_USER_FAILURE; payload: string }
