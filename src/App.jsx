import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 p-4 text-center'>Hello</h1>
      <div className='flex'>

      <Card name={"Johannes Kraut"} jobtitle={"Bauer"}description={"fett"}/>
      <Card name={"Karl Kraut"} jobtitle={"Koch"}description={"auch fett"}/>
      </div>

    </>
  );
}

export default App
