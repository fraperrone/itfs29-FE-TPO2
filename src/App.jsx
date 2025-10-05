import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola mundo</h1>
      <Footer></Footer>
    </>
  )
}

export default App
