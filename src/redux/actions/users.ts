import { Dispatch } from 'redux'
import { User } from '../../types'
import { fetchData } from '../../api/api'
import { API_URL } from '../../api/url'
import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
} from '../actionTypes'
import { UsersActionTypes } from '../types/users'

export const fetchCurrentUserRequest = () => ({
  type: FETCH_CURRENT_USER_REQUEST,
})
export const fetchCurrentUserSuccess = (user: User) => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  payload: user,
})
export const fetchCurrentUserFailure = (error: string) => ({
  type: FETCH_CURRENT_USER_FAILURE,
  payload: error,
})

export const fetchCurrentUser =
  () => async (dispatch: Dispatch<UsersActionTypes>) => {
    dispatch(fetchCurrentUserRequest())
    try {
      const response = await fetchData<User>({ url: API_URL.CURRENT_USER })
      dispatch(fetchCurrentUserSuccess(response))
    } catch (error: any) {
      dispatch(fetchCurrentUserFailure(error.message))
    }
  }
