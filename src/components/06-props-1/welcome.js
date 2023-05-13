import React from 'react'
import "./welcome.scss"

const Welcome = ({firstName, lastName}) => {
    
    return (
        <div className='welcome'>
            <h2>Welcome {firstName}{lastName}</h2>
        </div>
    )
}

export default Welcome