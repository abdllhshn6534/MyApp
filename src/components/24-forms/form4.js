import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
const Form3 = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",

    });
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value})
    }
    console.log(formData )
    return (
        <Container className='mt-5'>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>İsim</Form.Label>
                    <Form.Control
                        name="firstName"
                        type='text'
                        placeholder='Adınızı girin'
                        value={formData.firstName}
                        onChange={(e) => handleFormData(e)}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Soy isim</Form.Label>
                    <Form.Control
                        name="lastName"
                        type='text'
                        placeholder='Soyadınızı girin'
                        value={formData.lastName}
                        onChange={(e) => handleFormData(e)}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type='text'
                        placeholder='Email girin'
                        value={formData.email}
                        onChange={(e) => handleFormData(e)}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Telefon
                    </Form.Label>
                    <Form.Control
                        name="phone"
                        type='text'
                        placeholder='Telefon girin'
                        value={formData.phone}
                        onChange={(e) => handleFormData(e)}
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Form3