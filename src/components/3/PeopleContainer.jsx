import React, { useEffect, useState } from 'react'
import Card from '../Card'

export default function PeopleContainer
() { const [people, setPeople]= useState([]);
  useEffect(()=>{
    fetch("https://67b89321699a8a7baef48e81.mockapi.io/person").then(res => res.json().then((data)=>{console.log(data);
    setPeople(data);
    })
  );
  },[])
  return (
    <div>
        <h1>People</h1>    
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {people.map(element => {
            return <Card name ={person.name} ImgUri={person.avatar} title={person.jobtitle}/>
            
          })}

                <Card name="hans" title = "CEO" image="https://picsum.photos/200/300"/>
                <Card name="hans" title = "CEO" image="https://picsum.photos/200/300"/>
                <Card name="hans" title = "CEO" image="https://picsum.photos/200/300"/>
         </div>

            
        </div> 
    
  )
}
