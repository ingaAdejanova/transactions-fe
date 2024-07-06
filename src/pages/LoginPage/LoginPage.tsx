import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import theme from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { login } from '../../redux/actions'
import { Typography } from '../../components/core/Typography'
import { Button } from '../../components/core/Button'
import { TextField } from '../../components/core/TextField'
import { LockOutlinedIcon } from '../../components/core/Icons'
import { Avatar } from '../../components/core/Avatar'
import { ROUTES } from '../../routes/constants'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const FormContainer = styled.div`
  width: 480px;
  padding: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`

const StyledAvatar = styled(Avatar)`
  && {
    background-color: ${theme.colors.blue};
  }
`

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const { isLoading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.TRANSACTIONS)
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <Container>
      <FormContainer>
        <Wrapper>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h5">Sign in</Typography>
        </Wrapper>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <StyledButton type="submit" isLoading={isLoading}>
            Sign In
          </StyledButton>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </Container>
  )
}

export default LoginPage
