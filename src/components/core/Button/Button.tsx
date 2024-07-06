import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme'

const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  height: 45px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`

type Props = {
  children: React.ReactNode
  isLoading: boolean
  onClick?: () => void
  className?: string
  type?: 'submit' | 'reset' | 'button'
}

export const Button = ({ children, isLoading, type = 'button', onClick, className }: Props) => (
  <StyledButton type={type} disabled={isLoading} onClick={onClick} className={className}>
    {isLoading ? 'Logging In...' : children}
  </StyledButton>
)
