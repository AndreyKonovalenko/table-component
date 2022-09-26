import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { useFilterableTable } from '../hooks/useFilterableTable';

const Table = ({ data, columns }) => {
  const [tableData, handleFiltering] = useFilterableTable(data);
  console.log(handleFiltering);

  return (
    <S.Table>
      <TableHead
        columns={columns}
        tableData={tableData}
        handleFiltering={handleFiltering}
      />
      <TableBody columns={columns} tableData={tableData} />
    </S.Table>
  );
};

export default Table;
