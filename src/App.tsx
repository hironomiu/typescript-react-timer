import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TimerMain from './components/timer/TimerMain'
import Main from './components/timer2/Main'

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
            <Route path="/timer2" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
