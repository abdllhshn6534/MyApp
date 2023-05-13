import { useState, useEffect } from 'react';
import React  from 'react'
import { Button } from 'react-bootstrap';

const UseEffect = () => {
    const [message, setmessage] = useState("");
    const [error, seterror] = useState("")

    useEffect(()=> {
            console.log(`bu satır sayfa ilk render edildiğinde 
            çalışır yanlız re-render durumunda çalışmaz`)
    }, [])

    useEffect(() => {
      console.log(`Bu satır alttaki return her render
        edildiğinde tekrar render edilir`)
    })
    
    useEffect(() => {
    
    console.log('Deneme')
    }, [message])
    

  return (
    <div>
        <div>{message} - {error}</div>
        <Button variant='info' onClick={()=>setmessage("hello")}>Set message</Button>
        <Button variant='danger' onClick={()=> seterror("Some errors")}>Throw error</Button>

    </div>
  ) 
}

export default UseEffect