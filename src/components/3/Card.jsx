import React from 'react'


export default function Card(name, title, ImgUri) {
  return (
    <div className='border grid grid-cols-4 h-40'>

        <div className=' p-3'>
            <h2 className='font-bold text-2xl'>{name}</h2>
            <h4>{title}</h4>
        </div>
        <div className='bg-green-50 w-full h-full '>
            <img src={ImgUri} alt='' className='object-cover w-full'/>
        </div>
    </div>
  )
}
