import React from 'react'
import "./card.scss"
import Products from './products'
const ProductCard = (props) => {
    return (
      <div className='product-card' >
            {props.children}
      </div>
    )
  }

export default ProductCard
