import React from 'react'
import List from './List'
import Button from './Button'

export default function Sample2() {
  return (
   <div>
               <h1>Seite 1</h1>
               <div className='flex'>
   
                   <List drink={"Coffee"} drink2={"Tea"} beverage={"Beer"} />
                
               </div>
              
            
           </div>
  )
}
