import { render, screen } from '@testing-library/react'
import Button from '../components/parts/Button'
describe('Button', () => {
  it('test', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
