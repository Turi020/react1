import React, { useEffect, useState } from 'react'
import Card from '../Card'

export default function PeopleContainer(){
const[people, setPeople]= useState([]);
  useEffect(()=>{
    fetch("https://681e0cd6c1c291fa6632d2a4.mockapi.io/person").then(res => res.json().then((data)=>
    {
      setPeople(data);
    })
  );
  },[])
  return (
    <div>
        <h1>People</h1>    
        <div className='grid grid-cols-4 lg:grid-cols-4 gap-4'>
          {people.map(person => {
            return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle}/>
            
          })}

    
         </div>

            
      </div> 
    
  )
}
