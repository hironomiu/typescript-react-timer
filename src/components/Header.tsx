import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="h-14 bg-gray-100 items-center flex shadow-md">
      <div className="ml-4 text-xl">Timer App</div>
      <nav className="ml-10">
        <Link to="/timer" data-testid="timer-link" className="mx-2">
          Timer
        </Link>
        <Link to="/timer2" data-testid="timer2-link" className="mx-2">
          Timer2
        </Link>
      </nav>
    </header>
  )
}

export default Header
