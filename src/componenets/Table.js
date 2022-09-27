import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { useFilterableTable } from '../hooks/useFilterableTable';

const Table = ({ data, columns }) => {
  const [tableData, filteredData, handleFiltering] = useFilterableTable(data);

  return (
    <S.Table>
      <TableHead
        columns={columns}
        tableData={data}
        handleFiltering={handleFiltering}
      />
      <TableBody columns={columns} tableData={filteredData} />
    </S.Table>
  );
};

export default Table;
