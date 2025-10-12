import { useState } from 'react'
import Footer from '../src/components/Footer/footer.jsx'
import Guillermo from './components/guillermo.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Guillermo></Guillermo>
      <Footer></Footer>
      
    </>
  )
}

export default App
