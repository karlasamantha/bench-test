import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders header', () => {
  render(<App />)
  const element = screen.getByText(/bench test/i)
  expect(element).toBeInTheDocument()
})

test('renders loading component', () => {
  render(<App />)
  const element = screen.getByTestId('loading')
  expect(element).toBeInTheDocument()
})
