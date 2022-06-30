import { render, screen } from '@testing-library/react'
import TimerMain from '../components/timer/TimerMain'

describe('TimerMain', () => {
  it('test', () => {
    render(<TimerMain />)
    expect(screen.getByText('00:00:00')).toBeInTheDocument()
  })
})
