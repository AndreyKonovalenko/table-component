import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { useFilterableTable } from '../hooks/useFilterableTable';

const Table = ({ data, columns }) => {
  const [tableData, handleFiltering] = useFilterableTable(data, columns);

  return (
    <S.Table>
      <TableHead {...{ columns, handleFiltering, tableData }} />
      <TableBody columns={columns} tableData={tableData} />
    </S.Table>
  );
};

export default Table;
