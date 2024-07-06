import { Dispatch } from 'redux'
import { Sme } from '../../types'
import { fetchData } from '../../api/api'
import { API_URL } from '../../api/url'
import {
  FETCH_SME_REQUEST,
  FETCH_SME_SUCCESS,
  FETCH_SME_FAILURE,
} from '../actionTypes'
import { SmeActionTypes } from '../types/sme'

export const fetchSmeRequest = () => ({ type: FETCH_SME_REQUEST })
export const fetchSmeSuccess = (sme: Sme) => ({
  type: FETCH_SME_SUCCESS,
  payload: sme,
})
export const fetchSmeFailure = (error: string) => ({
  type: FETCH_SME_FAILURE,
  payload: error,
})

export const fetchSme = () => async (dispatch: Dispatch<SmeActionTypes>) => {
  dispatch(fetchSmeRequest())
  try {
    const response = await fetchData<Sme>({ url: API_URL.SME })
    dispatch(fetchSmeSuccess(response))
  } catch (error: any) {
    dispatch(fetchSmeFailure(error.message))
  }
}
