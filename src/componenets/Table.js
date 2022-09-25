import * as S from './styles/Table.styled';
import TableHead from './TableHead';

const Table = ({ columns }) => {
  return (
    <S.Table>
      <TableHead columns={columns} />
    </S.Table>
  );
};

export default Table;
