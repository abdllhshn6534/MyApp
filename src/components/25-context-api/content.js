import React, { useContext, useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import StoreContext from '../../store';

const Content = () => {
  const [amount, setAmount] = useState(1);
  const [curency, setCurency] = useState("USD");
  const [result, setResult] = useState(0);

  const store = useContext(StoreContext);

  const { currencies } = store
  useEffect(() => {
    const rslt = (amount / currencies[curency]).toFixed(2);
    setResult(rslt);
  }, [amount, curency])

  return (
    <div className='p-5'>
      <InputGroup className="mb-3 ">
        <Form.Control value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Form.Select value={curency} onChange={(e) => setCurency(e.target.value)} >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Form.Select>
        <InputGroup.Text id="basic-addon1">Result: {result} </InputGroup.Text>

      </InputGroup>
    </div>
  )
}

export default Content