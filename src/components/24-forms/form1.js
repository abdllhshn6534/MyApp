import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form1 = () => {
    const [name, setName] = useState("")


    return (
        <Container className='mt-5'>
            <Form>
                <Form.Group>
                    <h1>{name}</h1>
                    <Form.Control type='text'
                        placeholder='Enter your mail'
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                </Form.Group>
                
            </Form>
        </Container>
    )
}

export default Form1