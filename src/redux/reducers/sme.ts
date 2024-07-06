import {
  FETCH_SME_REQUEST,
  FETCH_SME_SUCCESS,
  FETCH_SME_FAILURE,
} from '../actionTypes'
import { SmeActionTypes } from '../types/sme'

const initialState = {
  sme: {
    id: '',
    legalName: '',
    businessType: '',
  },
  isLoading: false,
  error: null,
}

export const smeReducer = (state = initialState, action: SmeActionTypes) => {
  switch (action.type) {
    case FETCH_SME_REQUEST:
      return { ...state, isLoading: true, error: null }
    case FETCH_SME_SUCCESS:
      return { ...state, isLoading: false, sme: action.payload }
    case FETCH_SME_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}
