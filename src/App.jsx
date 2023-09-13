import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center text-5xl font-mono bg-red-300'>
        <p>A happy starting of our project! lets go!</p>
        </div>
    </>
  )
}

export default App
