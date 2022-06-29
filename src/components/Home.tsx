import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1 className="text-3xl mb-4">Hello!!</h1>
      <Link
        to="/timer"
        data-testid="timer-link"
        className="mx-2 text-blue-600 "
      >
        Timer
      </Link>
      <Link
        to="/timer2"
        data-testid="timer2-link"
        className="mx-2 text-blue-600"
      >
        Timer2
      </Link>
    </>
  )
}

export default Home
