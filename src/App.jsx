import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import List from './components/List'
import PersonCard from './components/PersonCard'

const workers =[
  {
    id:1,
    name: "John",
    lastname: "Doe",
    description: "Architect and Engineer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  
  },
  {
    id: 2,
    name: "Turancan",
    lastname: "Dur",
    description: "Lazy Software Engineer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 3,
    name: "Zeki",
    lastname: "Aksoy",
    description: "Lazier Software Engineer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },

]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="content">
     <List elements={["Coffee", "Beer", "Tea"]}/>
     </div>
    
      <Button vorname ={"Sendar"}/>
      

      <div className="text-2xl ml-2 mt-2">PersonCard</div>
      <PersonCard workers={workers} />

    </>
  );
}

export default App
