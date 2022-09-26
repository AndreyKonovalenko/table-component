import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Select = ({ accessor, data, handleFiltering }) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const hadleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(handleFiltering);
    handleFiltering(accessor, event.target.valuea);
  };
  const option = data.map((element) => (
    <option key={nanoid()} value={element}>
      {element}
    </option>
  ));
  return (
    <select value={selectedOption} onChange={hadleChange}>
      {option}
    </select>
  );
};
export default Select;
