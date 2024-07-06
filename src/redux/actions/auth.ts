import { Dispatch } from 'redux'
import { fetchData } from '../../api/api'
import { API_URL } from '../../api/url'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actionTypes'
import { AuthActionTypes } from '../types/auth'

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: token,
})
export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
})
export const logoutAction = () => ({ type: LOGOUT })

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(loginRequest())
    try {
      const response = await fetchData<{ token: string }>({
        url: API_URL.LOGIN,
        method: 'post',
        data: { email, password },
      })
      localStorage.setItem('token', response.token)
      dispatch(loginSuccess(response.token))
    } catch (error: any) {
      dispatch(loginFailure(error.message))
    }
  }

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem('token')
  dispatch(logoutAction())
}
