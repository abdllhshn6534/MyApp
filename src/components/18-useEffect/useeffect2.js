import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Prev } from 'react-bootstrap/esm/PageItem';

const Useffect2 = () => {
    const [counter, setcounter] = useState(0);

    useEffect(() => {
      document.title = `Hellooo${counter}`;   
     
    }, [counter])
    

  return (
    <Container className='text-center mt-5'>
        <h1>{counter}</h1>
        <Button variant='info' onClick={()=> setcounter((Prev) => Prev +1)}>Click Me</Button>
        
    </Container>
  )
}

export default Useffect2