import React from 'react'
import Welcome from './welcome'

const Greetings = () => {



  return (
    <div className='greetings'>
        <h1>Greetings Component</h1> 
        <Welcome firstName="Ali" lastName="Gel"></Welcome>
        <Welcome firstName="Ahmet" lastName="Gel"></Welcome>

    </div>
  )
}

export default Greetings