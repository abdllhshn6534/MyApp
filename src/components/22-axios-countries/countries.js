import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Country from './country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setloading] = useState(true)

    const loadData = async () => {
        const resp = await axios.get("https://restcountries.com/v3.1/all");

        const arr = resp.data.map((item) => ({
   
            flags: item.flags.png,
            name: item.name.common,
            population: item.population,
            capital: item.capital?.join("-")

        }));

        setCountries(arr)
        console.log(arr)
    }
    useEffect(() => {

        loadData();

    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Flag</th>
                    <th>Country Name</th>
                    <th>Population</th>
                    <th>Capital</th>



                </tr>
            </thead>
            <tbody>


                {
                    countries.map((item) =>
                    
                            <Country  {...item } key={item.name} />
                    )
                }


            </tbody>
        </Table>
    )
}

export default Countries