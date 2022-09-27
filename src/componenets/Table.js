import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { useTableContorls } from '../hooks/useTableControls';

const Table = ({ data, columns }) => {
  const [tableData, filters, handleFiltering] = useTableContorls(data);

  return (
    <S.Table>
      <TableHead
        columns={columns}
        tableData={tableData}
        handleFiltering={handleFiltering}
        filters={filters}
      />
      <TableBody columns={columns} tableData={tableData} />
    </S.Table>
  );
};

export default Table;
