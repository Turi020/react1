import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

import Sample from './components/Sample2'
import List from './components/List'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="content">
     <List elements={["Coffee", "Beer", "Tea"]}/>
     </div>
    
      <Button vorname ={"Sendar"}/>

    </>
  );
}

export default App
