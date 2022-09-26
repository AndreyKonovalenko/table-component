import { useState } from 'react';
import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ tableData, columns }) => {
  const [selectedOption, setSelectedOption] = useState({
    type: 'All',
    stats: 'All',
  });
  const hadleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <S.Table>
      <TableHead columns={columns} tableData={tableData} />
      <TableBody columns={columns} tableData={tableData} />
    </S.Table>
  );
};

export default Table;
