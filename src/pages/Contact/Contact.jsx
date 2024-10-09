import React from 'react'
import './Contact.css'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { name } = useParams()
  return (
    <div className='contact'>
      <h1>{name}</h1>
    </div>
  )
}

export default Contact
