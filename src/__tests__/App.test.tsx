import { getByTestId, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  test('Timer', async () => {
    render(<App />)
    expect(screen.getByText('Timer App')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('timer-link'))
    expect(await screen.findByText('00:00:00')).toBeInTheDocument()
    // MEMO: TimerInputBoard
    expect(screen.getByTestId('時')).toBeInTheDocument()
    expect(screen.getByTestId('分')).toBeInTheDocument()
    expect(screen.getByTestId('秒')).toBeInTheDocument()
    expect(screen.getByText('時')).toBeInTheDocument()
    expect(screen.getByText('分')).toBeInTheDocument()
    expect(screen.getByText('秒')).toBeInTheDocument()

    // MEMO: TimerLine
    expect(screen.getByText('00:00:00')).toBeInTheDocument()
    userEvent.type(screen.getByTestId('時'), '1')
    expect(screen.getByText('01:00:00')).toBeInTheDocument()
    userEvent.type(screen.getByTestId('分'), '1')
    expect(screen.getByText('01:01:00')).toBeInTheDocument()
    userEvent.type(screen.getByTestId('秒'), '1')
    expect(screen.getByText('01:01:01')).toBeInTheDocument()

    // screen.debug()
    // MEMO: TimerButtonBoard
    expect(screen.getByRole('button', { name: 'START' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'RESTART' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'STOP' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'RESET' })).toBeInTheDocument()
  })
})
