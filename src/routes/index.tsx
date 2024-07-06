import React, { Suspense, useEffect } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import GlobalStyles from '../theme/globalStyles'
import Layout from '../components/layouts/Layout'
import { Loader } from '../components/core/Loader'
import { fetchSme, fetchCurrentUser } from '../redux/actions'
import { ROUTES } from './constants'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const TransactionsPage = React.lazy(
  () => import('../pages/TransactionsPage/TransactionsPage')
)
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'))
const NotFoundPage = React.lazy(
  () => import('../pages/NotFoundPage/NotFoundPage')
)

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  return isAuthenticated ? element : <Navigate to={ROUTES.LOGIN} />
}

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        }
      >
        <GlobalStyles />
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route
            path="*"
            element={<PrivateRoute element={<ProtectedRoutes />} />}
          />
        </Routes>
      </Suspense>
    </Router>
  )
}

const ProtectedRoutes = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSme())
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={ROUTES.TRANSACTIONS} replace />}
        />
        <Route path={ROUTES.TRANSACTIONS} element={<TransactionsPage />} />
        {/* Add more protected routes here */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
