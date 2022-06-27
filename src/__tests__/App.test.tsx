import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(<App />)
  expect(screen.getByText('Timer App')).toBeInTheDocument()

  expect(screen.getByTestId('時')).toBeInTheDocument()
  expect(screen.getByTestId('分')).toBeInTheDocument()
  expect(screen.getByTestId('秒')).toBeInTheDocument()
  expect(screen.getByText('時')).toBeInTheDocument()
  expect(screen.getByText('分')).toBeInTheDocument()
  expect(screen.getByText('秒')).toBeInTheDocument()
  userEvent.type(screen.getByTestId('時'), '1')
  // screen.debug()
  // MEMO: TimerButtonBoard
  expect(screen.getByRole('button', { name: 'START' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'RESTART' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'STOP' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'RESET' })).toBeInTheDocument()
})
