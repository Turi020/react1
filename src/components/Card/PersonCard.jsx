import React from 'react'

export default function PersonCard(name, lastname, title, Imgurl) {
  return (
    <div>
        <div>
            <h1>{name}</h1>
            <h1>{lastname}</h1>
            <h2>{title}</h2>
        </div>
        <div>
            <img src={Imgurl} alt=""/>
        </div>
    </div>
  )
}
