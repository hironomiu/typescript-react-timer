import { Suspense } from 'react'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </>
  )
}

export default App
