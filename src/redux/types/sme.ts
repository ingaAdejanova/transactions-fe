import { Sme } from '../../types'
import {
  FETCH_SME_REQUEST,
  FETCH_SME_SUCCESS,
  FETCH_SME_FAILURE,
} from '../actionTypes'

export type SmeActionTypes =
  | { type: typeof FETCH_SME_REQUEST }
  | { type: typeof FETCH_SME_SUCCESS; payload: Sme }
  | { type: typeof FETCH_SME_FAILURE; payload: string }
