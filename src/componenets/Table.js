import * as S from './styles/Table.styled';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ columns, tableData }) => {
  return (
    <S.Table>
      <TableHead columns={columns} />
      <TableBody columns={columns} tableData={tableData} />
    </S.Table>
  );
};

export default Table;
