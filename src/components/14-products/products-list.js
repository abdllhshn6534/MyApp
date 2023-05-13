import React from 'react'
import products from "./products.json"
import { Container, Row, Col } from 'react-bootstrap'
import Product from './product'

const ProductList = () => {
    return (
        <Container>
            <Row className='g-5'>
                { products.map((product) => (
                        <Col key={product.id} md={4} lg={3}  >
                            <Product {...product} />
                        </Col>))
                }

            </Row>
        </Container>
    )
}

export default ProductList