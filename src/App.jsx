import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import List from './components/List'
import PersonCardContainer from './components/Card/PersonCardContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="content">
     <List elements={["Coffee", "Beer", "Tea"]}/>
     </div>
    
      <Button vorname ={"Sendar"}/>
      <div>
        <PersonCardContainer/>
      </div>

    </>
  );
}

export default App
