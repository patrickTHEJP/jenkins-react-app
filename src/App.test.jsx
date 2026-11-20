import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

describe('React Application', () => {
  it('displays the Get started heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /get started/i })
    ).toBeInTheDocument()
  })

  it('increments the counter when clicked', () => {
    render(<App />)

    const button = screen.getByRole('button', {
      name: /count is 0/i,
    })

    fireEvent.click(button)

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument()
  })
})