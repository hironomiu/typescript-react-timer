import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-8 mb-4">
      <Outlet />
    </main>
  )
}

export default Main
