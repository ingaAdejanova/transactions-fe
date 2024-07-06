import { fetchSme, fetchSmeRequest, fetchSmeSuccess, fetchSmeFailure } from '../../../redux/actions'
import { FETCH_SME_REQUEST, FETCH_SME_SUCCESS, FETCH_SME_FAILURE } from '../../../redux/actionTypes'
import { fetchData } from '../../../api/api'

jest.mock('../../../api/api', () => ({
  fetchData: jest.fn(),
}))

const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>

const SME = {
  id: '58c0645c-ce36-4395-9658-9a654cd3f3f9',
  legalName: 'Gollum Enterprises',
  businessType: 'EINZELUNTERNEHMEN',
}

describe('Redux Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create an action to fetch sme request', () => {
    const expectedAction = { type: FETCH_SME_REQUEST }
    expect(fetchSmeRequest()).toEqual(expectedAction)
  })

  it('should create an action to fetch c success', () => {
    const expectedAction = { type: FETCH_SME_SUCCESS, payload: SME }
    expect(fetchSmeSuccess(SME)).toEqual(expectedAction)
  })

  it('should create an action to fetch sme failure', () => {
    const error = 'Error message'
    const expectedAction = { type: FETCH_SME_FAILURE, payload: error }
    expect(fetchSmeFailure(error)).toEqual(expectedAction)
  })

  it('should dispatch fetchSmeSuccess after successful data fetch', async () => {
    const dispatch = jest.fn()

    mockedFetchData.mockResolvedValue(SME)

    await fetchSme()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(fetchSmeRequest())
    expect(dispatch).toHaveBeenCalledWith(fetchSmeSuccess(SME))
  })

  it('should dispatch fetchSmeFailure after failed data fetch', async () => {
    const dispatch = jest.fn()

    const error = { message: 'Error message' }
    mockedFetchData.mockRejectedValue(error)

    await fetchSme()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(fetchSmeRequest())
    expect(dispatch).toHaveBeenCalledWith(fetchSmeFailure(error.message))
  })
})
