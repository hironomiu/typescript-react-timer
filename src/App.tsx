import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Main from './components/Main'
import TimerMain from './components/timer/TimerMain'
import Timer2Main from './components/timer2/Timer2Main'

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
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/timer" element={<TimerMain />} />
              <Route path="/timer2" element={<Timer2Main />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
