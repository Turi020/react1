import React from 'react'
import Card from './Card'
 
type Props = {}
 
export default function Apps ({ }: Props) {
  return (
    <>
      <div className='flex'>
        <Card name='Turi' description='Lazy Programmer' />
        <Card name='Zeki' description='Lazier-Programmer' />
        <Card name='John' description='Lazy-Boss' />
        <Card name='Kevin' description='Student' />
      </div>
    </>
  )
}
