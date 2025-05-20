import React,{useState,useEffect} from 'react'
import Card from '../Card'

type Props = {
        text: String;
}

export default function Components({}: Props) {
  return (
    <div>Components</div>
  )
}
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts/1/comments ").then((res) => res.json().then((data)=>
    {
      setComponents(data);
    })
  );
  },[]);

  return (
    <div>
        <h1>Hallo</h1>   
       <div>
       <input className="bg-green-200" type='text' onChange={()=>{

       }}/>
       </div>
)