import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { GrPowerReset } from 'react-icons/gr'

const Counter = () => {
    const [counter, setcounter] = useState(0);

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="info" onClick={() => setcounter(prev => prev + 1)}><AiOutlinePlusCircle /></Button>
                <Button variant="light" disabled>{counter}</Button>
                <Button variant="warning" onClick={() => setcounter(prev => prev - 1)}><AiOutlineMinusCircle /></Button>
                <Button variant="danger" onClick={() => setcounter(0)}><GrPowerReset /></Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter