import React from 'react'
import ProductCard from './product-card'

const Products = () => {
    return (
        <div>

            <ProductCard>
                <h1>Sony Display</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus q
                    uis delectus aut labore aperiam distinctio voluptas facere, doloribus vero,
                    reprehenderit ipsa quidem odit corrupti asperiores culpa exercitationem eaque nulla quam.
                </p>

            </ProductCard>  
            <ProductCard>
                <h1>Intel Processor</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quis delectus aut labore aperiam distinctio
                    voluptas facere, doloribus vero, reprehenderit ipsa quidem odit corrupti asperiores culpa exercitationem
                    eaque nulla quam.</p>

            </ProductCard>



        </div>
    )
}

export default Products