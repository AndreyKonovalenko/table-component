import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Select = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const option = data.map((element) => (
    <option key={nanoid()}>{element}</option>
  ));
  return (
    <select defaultValue={selectedOption} onChange={setSelectedOption}>
      {option}
    </select>
  );
};
export default Select;
