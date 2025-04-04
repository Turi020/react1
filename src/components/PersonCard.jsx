import React from 'react'

export default function PersonCard({workers}) {
  return (
    <ul className=' flex'>
      {workers.map((i) =>(
        <li key={i.id}>
          <div className='m-5 w-100 font-black shadow-2xs'>
            <img src={i.Imgurl} className='w-40 h-40'></img>
            <div className='pl-2 pt-0.5'>{i.name}</div>
            <div className='pl-2 pt-3'>{i.lastname}</div>
            <div className='pl-2 pt-4'>{i.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
