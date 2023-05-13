import React from 'react'
import './galery.scss'
import images from "./image.json"

const Gallery = () => {
    return (
        <div className='gallery'>

            {
                images.map((imge, i) => (
                    <div key={i}>
                       <a href={require(`../../assets/img/${imge.name}`)} target='blank'> <img src={require(`../../assets/img/${imge.name}`)} alt="" /></a>
                    </div>

                ))}

        </div>
    )
}

export default Gallery