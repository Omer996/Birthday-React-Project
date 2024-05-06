import React from 'react'

const Person = ({image, name, age}) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h2>{name}</h2>
        <h3>{age} years</h3>
      </div>
    </article>
  )
}

export default Person
