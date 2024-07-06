import { useDispatch, useSelector } from 'react-redux'
import store from './store'
import rootReducer from '.'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
