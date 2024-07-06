import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../../components/core/Button'

describe('Button component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a button with provided text', () => {
    const onClick = jest.fn()
    render(
      <Button isLoading={false} onClick={onClick}>
        Click me
      </Button>,
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should call onClick handler when the button is clicked', () => {
    const onClick = jest.fn()
    render(
      <Button isLoading={false} onClick={onClick}>
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
