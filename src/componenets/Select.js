import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Select = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const hadleChange = (event) => {
    setSelectedOption(event.target.value);
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
