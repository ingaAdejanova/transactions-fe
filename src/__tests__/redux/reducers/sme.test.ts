import { smeReducer } from '../../../redux/reducers/sme'
import { FETCH_SME_REQUEST, FETCH_SME_SUCCESS, FETCH_SME_FAILURE } from '../../../redux/actionTypes'

describe('smeReducer', () => {
  const initialState = {
    sme: {
      id: '',
      legalName: '',
      businessType: '',
    },
    isLoading: false,
    error: null,
  }

  it('should handle FETCH_SME_REQUEST', () => {
    expect(smeReducer(initialState, { type: FETCH_SME_REQUEST })).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    })
  })

  it('should handle FETCH_SME_SUCCESS', () => {
    const sme = {
      id: '58c0645c-ce36-4395-9658-9a654cd3f3f9',
      legalName: 'Gollum Enterprises',
      businessType: 'EINZELUNTERNEHMEN',
    }
    expect(smeReducer(initialState, { type: FETCH_SME_SUCCESS, payload: sme })).toEqual({
      ...initialState,
      sme,
      isLoading: false,
    })
  })

  it('should handle FETCH_SME_FAILURE', () => {
    const error = 'Error message'
    expect(smeReducer(initialState, { type: FETCH_SME_FAILURE, payload: error })).toEqual({
      ...initialState,
      isLoading: false,
      error,
    })
  })
})
