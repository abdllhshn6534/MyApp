import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
const Form3 = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",

    });
    console.log(formData )
    return (
        <Container className='mt-5'>  
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>İsim</Form.Label>
                    <Form.Control type='text'
                        placeholder='Adınızı girin'
                        value={formData.firstName}
                        onChange={(e) => setFormData(
                            { ...formData, firstName: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Soy isim</Form.Label>
                    <Form.Control type='text'
                        placeholder='Syadınızı girin'
                        value={formData.lastName}
                        onChange={(e) => setFormData(
                            { ...formData, lastName: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text'
                        placeholder='Email girin'
                        value={formData.email}

                        onChange={(e) => setFormData(
                            { ...formData, email: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Telefon
                    </Form.Label>
                    <Form.Control type='text'
                        placeholder='Telefon girin'
                        value={formData.phone}

                        onChange={(e) => setFormData(
                            { ...formData, phone: e.target.value })}
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Form3