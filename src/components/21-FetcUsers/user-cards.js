import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import UserCard from './user-card'

const UserCards = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://6468ac4be99f0ba0a82a0b1f.mockapi.io/users")
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data);
                
            })

            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                setLoading(false);
            })
        }, 2000);
       
    }, [])

    return (
        <Container className='mt-5'>
            
           {loading && <Spinner animation="border" variant="primary" />}  
            <Row className='g-4'>
                {
                    users.map((user) => <Col key={user.id} sm={6}
                    md={4} lg={3} xl={2}><UserCard {...user} /></Col>)
                }

            </Row>
        </Container>
    )
}

export default UserCards