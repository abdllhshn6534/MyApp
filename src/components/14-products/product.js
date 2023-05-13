import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = (props) => {
    console.log(props)
    const { img, desc, title, price } = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`./images/${img}`)} />
            <Card.Body className='text-center'>
                <Card.Title className='fs-2'>{title}</Card.Title>
                <Card.Subtitle>{desc}</Card.Subtitle>
                <Card.Text className='fs-3 text-info'>
                <strong>${price}</strong>   
                </Card.Text>
                
                <Button variant="warning">Add to card</Button>
            </Card.Body>
        </Card>
    )
}

export default Product