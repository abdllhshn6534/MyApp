import React from "react";

const Jsx5 = () =>{
const names =["ali","veli","osman","mehmet"];
const cities = ["istanbul","izmir","van","ankara"];
    return(
        <div>
            <ul>
                {names.map((name,index)=> <li key={index}>{name}</li> ) }
            </ul>
            <select>
                {cities.map((city,i) => <option key={i}>{city}</option>)}
            </select>
        </div>
    )
}

export default Jsx5;