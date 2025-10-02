import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Franco from './components/Franco'
import FrancoPage from './pages/FrancoPage'
import ApiPage from './pages/ApiPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FrancoPage /> */}
      <ApiPage />
    </>
  )
}

export default App
