import React, { useState } from 'react';

const Country = (props) => {
  const { flags, name, population, capital } = props;

  return (
    <tr>
      <td>1</td>
      <td><img src={flags} alt="" /></td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{capital}</td>
     </tr>
  );
};

export default Country;
