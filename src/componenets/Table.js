import { useState } from 'react';
import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { useTableContorls } from '../hooks/useTableControls';

const Table = ({ data, columns }) => {
  const [tableData, filters, handleFiltering, handleSorting] =
    useTableContorls(data);
  const [bought, setBought] = useState([]);
  const onBuy = (id, event) => {
    if (!bought.includes(id)) {
      setBought((prevSate) => [...prevSate, id]);
      event.stopPropagation();
    }
    if (bought.includes(id)) {
      setBought(bought.filter((element) => element !== id));
      event.stopPropagation();
    }
  };
  return (
    <S.Table>
      <TableHead
        columns={columns}
        tableData={data}
        handleFiltering={handleFiltering}
        filters={filters}
        handleSorting={handleSorting}
      />
      <TableBody
        columns={columns}
        tableData={tableData}
        onBuy={onBuy}
        bought={bought}
      />
    </S.Table>
  );
};

export default Table;
