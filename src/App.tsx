import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TimerMain from './components/timer/TimerMain'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Layout />
              </Suspense>
            }
          >
            <Route path="/timer" element={<TimerMain />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
